import { createServer } from 'node:http';

export function createApp({ service, origins }) {
  return createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Vary', 'Origin');
    const send = (status, body) => { res.writeHead(status); res.end(JSON.stringify(body)); };
    const origin = req.headers.origin;
    if (origin && !origins.includes(origin)) return send(403, { error: 'Origin not allowed' });
    if (origin) res.setHeader('Access-Control-Allow-Origin', origin);
    let url;
    try { url = new URL(req.url, 'http://localhost'); } catch { return send(400, { error: 'Invalid URL' }); }
    if (!['/health', '/api/news'].includes(url.pathname)) return send(404, { error: 'Not found' });
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
      res.writeHead(204);
      return res.end();
    }
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET, OPTIONS');
      return send(405, { error: 'Method not allowed' });
    }
    if (url.pathname === '/health') return send(200, { status: 'ok' });
    const limits = url.searchParams.getAll('limit');
    const raw = limits[0] ?? '6';
    if ([...url.searchParams.keys()].some(key => key !== 'limit') || limits.length > 1
      || !/^\d+$/.test(raw) || Number(raw) < 1 || Number(raw) > 25) {
      return send(400, { error: 'Use only limit, an integer from 1 to 25' });
    }
    try { send(200, await service.getPosts(Number(raw))); }
    catch {
      res.setHeader('Retry-After', '60');
      send(503, { error: 'Aktualności są chwilowo niedostępne. Spróbuj ponownie później.' });
    }
  });
}
