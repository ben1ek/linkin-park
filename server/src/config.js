export function readConfig(env = process.env) {
  const pageId = env.FACEBOOK_PAGE_ID?.trim();
  const token = env.FACEBOOK_PAGE_ACCESS_TOKEN?.trim();
  const version = env.FACEBOOK_GRAPH_VERSION?.trim() || 'v26.0';
  const port = Number(env.PORT || 3001);
  if (!pageId || !/^\d+$/.test(pageId)) throw new Error('Set FACEBOOK_PAGE_ID to a numeric Page ID.');
  if (!token) throw new Error('Set FACEBOOK_PAGE_ACCESS_TOKEN.');
  if (!/^v\d+\.\d+$/.test(version)) throw new Error('Invalid FACEBOOK_GRAPH_VERSION.');
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid PORT.');
  const origins = (env.ALLOWED_ORIGINS || '').split(',').map(value => value.trim()).filter(Boolean);
  if (!origins.length) throw new Error('Set ALLOWED_ORIGINS to the frontend origin.');
  for (const origin of origins) {
    let url;
    try { url = new URL(origin); } catch { throw new Error('Invalid ALLOWED_ORIGINS.'); }
    if (!['https:', 'http:'].includes(url.protocol) || url.origin !== origin) {
      throw new Error('ALLOWED_ORIGINS must contain exact HTTP(S) origins without paths or trailing slashes.');
    }
  }
  return { pageId, token, version, port, origins };
}
