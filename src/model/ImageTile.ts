export class ImageTile {
  src = '';

  title = '';

  description = '';

  link = '';

  constructor(data?: Partial<ImageTile>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
