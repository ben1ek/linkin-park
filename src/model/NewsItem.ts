export class NewsItem {
  id: number;

  multimedia: string;

  description: string;

  link: string;

  constructor(data?: Partial<NewsItem>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
