import { EnumRouteName } from '@/enum/EnumRouteName';

export class SiteMenuItem {
  name = '';

  icon = '';

  routeName: EnumRouteName = EnumRouteName.HOME;


  constructor(data?: Partial<SiteMenuItem>) {
    if (data) {
        Object.assign(this, data);
    }
  }
}
