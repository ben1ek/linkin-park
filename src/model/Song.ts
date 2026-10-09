export class Song {
  name = '';

  lenght = '';

  writers = '';

  url = '';

  constructor(data?: Partial<Song>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
