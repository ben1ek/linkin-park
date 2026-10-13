const TTL = 10 * 60 * 1000;
const MAX_AGE = 24 * 60 * 60 * 1000;
const RETRY_DELAY = 60 * 1000;

function safeUrl(value) {
  try { return new URL(value).protocol === 'https:' ? value : ''; } catch { return ''; }
}

export class FacebookPostsService {
  constructor({ pageId, token, version }, { fetchImpl = fetch, now = Date.now, warn = console.warn } = {}) {
    this.config = { pageId, token, version };
    this.fetch = fetchImpl;
    this.now = now;
    this.warn = warn;
    this.cache = null;
    this.pending = null;
    this.retryAt = 0;
  }

  async refresh() {
    const { pageId, token, version } = this.config;
    const url = new URL('https://graph.facebook.com/' + version + '/' + pageId + '/posts');
    url.searchParams.set('fields', 'id,message,created_time,permalink_url,full_picture');
    url.searchParams.set('limit', '25');
    try {
      const response = await this.fetch(url, {
        headers: { Authorization: 'Bearer ' + token },
        signal: AbortSignal.timeout(10_000),
        redirect: 'error',
      });
      if (!response.ok) throw new Error('Upstream HTTP error');
      const body = await response.json();
      if (body.error || !Array.isArray(body.data)) throw new Error('Invalid upstream response');
      const data = body.data.map(post => {
        if (!post || typeof post.id !== 'string' || typeof post.created_time !== 'string'
          || !Number.isFinite(Date.parse(post.created_time))) throw new Error('Invalid post');
        return {
          id: post.id,
          description: typeof post.message === 'string' ? post.message : '',
          multimedia: safeUrl(post.full_picture),
          link: safeUrl(post.permalink_url),
          publishedAt: new Date(post.created_time).toISOString(),
        };
      });
      this.cache = { data, fetchedAt: this.now() };
      this.retryAt = 0;
    } catch {
      this.retryAt = this.now() + RETRY_DELAY;
      // Never log Meta responses, request URLs, or tokens.
      this.warn('Facebook posts refresh failed; retry delayed for 60 seconds.');
    }
  }

  async getPosts(limit = 6) {
    if (!Number.isInteger(limit) || limit < 1 || limit > 25) throw new Error('Invalid limit');
    if ((!this.cache || this.now() - this.cache.fetchedAt >= TTL) && this.now() >= this.retryAt) {
      if (!this.pending) this.pending = this.refresh().finally(() => { this.pending = null; });
      await this.pending;
    }
    if (!this.cache || this.now() - this.cache.fetchedAt >= MAX_AGE) throw new Error('News unavailable');
    return {
      data: this.cache.data.slice(0, limit),
      updatedAt: new Date(this.cache.fetchedAt).toISOString(),
      stale: this.now() - this.cache.fetchedAt >= TTL,
    };
  }
}
