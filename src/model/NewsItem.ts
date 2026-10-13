export class NewsItem {
  id = '';

  publishedAt = '';

  multimedia = '';

  description = '';

  link = '';

  constructor(data?: Partial<NewsItem>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
