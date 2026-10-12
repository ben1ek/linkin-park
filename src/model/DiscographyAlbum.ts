import { Song } from "./Song";

export class DiscographyAlbum {
  name = '';

  yearReleased = 0;

  cover = '';

  description = '';

  url = 'https://linkinpedia.com/';

  tracklist: Song[] = [];

  constructor(data?: Partial<DiscographyAlbum>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
