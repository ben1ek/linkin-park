import { Song } from "./Song";

export class DiscographyAlbum {
  name = '';

  yearReleased = 0;

  cover = '';

  description = '';

  tracklist: Song[] = [];

  constructor(data?: Partial<DiscographyAlbum>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
