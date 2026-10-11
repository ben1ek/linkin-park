export class Song {
  name = '';

  length = '';

  writers = '';

  url = '';

  constructor(data?: Partial<Song>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
