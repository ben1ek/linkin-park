export class NewsItem {
  id = 0;

  multimedia = '';

  description = '';

  link = '';

  constructor(data?: Partial<NewsItem>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
