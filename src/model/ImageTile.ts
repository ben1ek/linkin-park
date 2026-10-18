import type { RouteLocationRaw } from 'vue-router';

export class ImageTile {
  src = '';

  title = '';

  description = '';

  link: RouteLocationRaw | null = null;

  constructor(data?: Partial<ImageTile>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
