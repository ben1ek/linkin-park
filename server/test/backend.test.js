import { test } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { FacebookPostsService } from '../src/facebook-posts-service.js';
import { createApp } from '../src/app.js';
import { readConfig } from '../src/config.js';

const config = { pageId: '123', token: 'test-secret', version: 'v26.0' };
const post = { id: '123_456', message: 'Post', created_time: '2026-10-12T16:05:07+0000',
  permalink_url: 'https://www.facebook.com/test/posts/456', full_picture: 'https://example.com/image.jpg' };
const response = (data) => ({ ok: true, json: async () => ({ data, paging: { next: 'secret' } }) });

test('maps posts, omits upstream paging, caches across limits and coalesces concurrent calls', async () => {
  let calls = 0;
  const service = new FacebookPostsService(config, { fetchImpl: async (url, options) => {
    calls++;
    assert.equal(url.hostname, 'graph.facebook.com');
    assert.equal(url.searchParams.get('limit'), '30');
    assert.equal(url.searchParams.has('access_token'), false);
    assert.equal(options.headers.Authorization, 'Bearer test-secret');
    assert.ok(options.signal);
    return response([post, { id: '123_789', created_time: post.created_time }]);
  } });
  const [one, two] = await Promise.all([service.getPosts(1), service.getPosts(2)]);
  assert.equal(calls, 1);
  assert.equal(one.data.length, 1);
  assert.equal(two.data.length, 2);
  assert.equal(two.data[1].description, '');
  assert.equal(two.data[1].multimedia, '');
  assert.equal(one.data[0].publishedAt, '2026-10-12T16:05:07.000Z');
  assert.equal(one.data[0].id, '123_456');
  assert.equal(one.data[0].link, post.permalink_url);
  assert.equal(one.data[0].multimedia, post.full_picture);
  assert.equal(one.stale, false);
  assert.equal('paging' in one, false);
  await service.getPosts();
  assert.equal(calls, 1);
});

test('stale fallback, retry cooldown, recovery and maximum stale age', async () => {
  let time = 0, calls = 0, failed = false;
  const service = new FacebookPostsService(config, { now: () => time, warn: () => {},
    fetchImpl: async () => { calls++; if (failed) throw new Error('secret'); return response([post]); } });
  await service.getPosts();
  time = 600_000;
  failed = true;
  assert.equal((await service.getPosts()).stale, true);
  await service.getPosts();
  assert.equal(calls, 2);
  time += 60_000;
  failed = false;
  assert.equal((await service.getPosts()).stale, false);
  failed = true;
  time += 86_400_000;
  await assert.rejects(service.getPosts(), /News unavailable/);
});

test('empty successful feed is cached', async () => {
  let calls = 0;
  const service = new FacebookPostsService(config, { fetchImpl: async () => { calls++; return response([]); } });
  assert.deepEqual((await service.getPosts()).data, []);
  await service.getPosts();
  assert.equal(calls, 1);
});

test('HTTP errors, malformed data and network failures do not expose secrets', async () => {
  for (const fetchImpl of [
    async () => ({ ok: false }),
    async () => ({ ok: true, json: async () => ({ error: { message: 'test-secret' } }) }),
    async () => response([{ id: '123', created_time: 'invalid' }]),
    async () => { throw new Error('test-secret'); },
  ]) {
    const logs = [];
    const service = new FacebookPostsService(config, { fetchImpl, warn: value => logs.push(value) });
    await assert.rejects(service.getPosts(), { message: 'News unavailable' });
    assert.ok(!logs.join('').includes('test-secret'));
  }
});

test('validates environment without exposing its values', () => {
  const env = { FACEBOOK_PAGE_ID: '123', FACEBOOK_PAGE_ACCESS_TOKEN: 'secret', ALLOWED_ORIGINS: 'https://example.com' };
  assert.equal(readConfig(env).port, 3001);
  for (const changes of [
    { FACEBOOK_PAGE_ACCESS_TOKEN: '' }, { FACEBOOK_PAGE_ID: '../me' },
    { PORT: '0' }, { FACEBOOK_GRAPH_VERSION: '../me' }, { ALLOWED_ORIGINS: '*' },
    { ALLOWED_ORIGINS: 'https://example.com/path' }, { ALLOWED_ORIGINS: '' },
  ]) assert.throws(() => readConfig({ ...env, ...changes }));
});

test('HTTP routes, CORS, limits, health, methods and sanitized failure', async (t) => {
  let calls = 0, failed = false;
  const server = createApp({ origins: ['https://example.com'], service: {
    getPosts: async limit => { calls++; if (failed) throw new Error('test-secret'); return { data: [], limit }; },
  } });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise(resolve => { server.close(resolve); server.closeAllConnections(); }));
  const base = 'http://127.0.0.1:' + server.address().port;
  const get = (path, options) => fetch(base + path, options);
  assert.equal((await get('/health')).status, 200);
  assert.equal(calls, 0);
  const ok = await get('/api/news?limit=2', { headers: { Origin: 'https://example.com' } });
  assert.equal(ok.headers.get('access-control-allow-origin'), 'https://example.com');
  assert.equal((await ok.json()).limit, 2);
  for (const path of ['?limit=0', '?limit=31', '?limit=1.2', '?limit=2&limit=3', '?access_token=secret']) {
    assert.equal((await get('/api/news' + path)).status, 400);
  }
  assert.equal((await get('/api/news', { headers: { Origin: 'https://evil.example' } })).status, 403);
  assert.equal(calls, 1);
  assert.equal((await get('/api/news', { method: 'POST' })).status, 405);
  assert.equal((await get('/api/news', { method: 'OPTIONS', headers: { Origin: 'https://example.com' } })).status, 204);
  assert.equal((await get('/missing')).status, 404);
  failed = true;
  const error = await get('/api/news');
  assert.equal(error.status, 503);
  assert.equal(error.headers.get('retry-after'), '60');
  assert.ok(!(await error.text()).includes('test-secret'));
});

test('logs only numeric Meta diagnostics, never upstream messages or tokens', async () => {
  const logs = [];
  const service = new FacebookPostsService(config, { warn: value => logs.push(value),
    fetchImpl: async () => ({ ok: false, status: 400, json: async () => ({
      error: { code: 190, error_subcode: 463, message: 'test-secret', fbtrace_id: 'private-trace' }
    }) }) });
  await assert.rejects(service.getPosts(), /News unavailable/);
  assert.match(logs[0], /"httpStatus":400/);
  assert.match(logs[0], /"code":190/);
  assert.match(logs[0], /"subcode":463/);
  assert.ok(!logs[0].includes('test-secret'));
  assert.ok(!logs[0].includes('private-trace'));
});

test('distinguishes timeout and invalid upstream response in safe logs', async () => {
  for (const [fetchImpl, stage] of [
    [async () => { throw new DOMException('test-secret', 'TimeoutError'); }, 'timeout'],
    [async () => ({ status: 502, ok: false, json: async () => { throw new Error('test-secret'); } }), 'response'],
  ]) {
    const logs = [];
    const service = new FacebookPostsService(config, { fetchImpl, warn: value => logs.push(value) });
    await assert.rejects(service.getPosts());
    assert.ok(logs[0].includes('"stage":"' + stage + '"'));
    assert.ok(!logs[0].includes('test-secret'));
  }
});