import { NewsItem } from '../model/NewsItem';

export async function fetchNews(signal: AbortSignal): Promise<{ data: NewsItem[], stale: boolean }> {
  const base = import.meta.env.VITE_API_BASE_URL?.trim();
  if (!base) throw new Error('Missing VITE_API_BASE_URL');
  const url = new URL(base);
  if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Invalid API URL');
  url.pathname = '/api/news';
  url.search = '?limit=25';
  url.hash = '';
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error('News request failed');
  const body = await response.json();
  if (!Array.isArray(body.data) || typeof body.stale !== 'boolean') throw new Error('Invalid news response');
  const data = body.data.map((item: Record<string, unknown>) => {
    if (!item || ['id', 'description', 'multimedia', 'link', 'publishedAt'].some(key => typeof item[key] !== 'string')) {
      throw new Error('Invalid news item');
    }
    const safeUrl = (value: string): string => {
      try { return new URL(value).protocol === 'https:' ? value : ''; } catch { return ''; }
    };
    return new NewsItem({
      id: item.id as string,
      description: item.description as string,
      multimedia: safeUrl(item.multimedia as string),
      link: safeUrl(item.link as string),
      publishedAt: item.publishedAt as string,
    });
  });
  return { data, stale: body.stale };
}
