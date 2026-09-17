export class SiteMenuItem {
  name: string;

  icon: string;

  address: string;

  active?: boolean;

  constructor(data?: Partial<SiteMenuItem>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
