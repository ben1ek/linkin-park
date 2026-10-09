export class SiteMenuItem {
  name = '';

  icon = '';

  address = '';

  active?: boolean;

  constructor(data?: Partial<SiteMenuItem>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
