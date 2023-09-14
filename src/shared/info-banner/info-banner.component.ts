import { Component, Input } from '@angular/core';
import { InfoBannerTypes } from '../_models/enums';

@Component({
  selector: 'app-info-banner',
  templateUrl: './info-banner.component.html',
  styleUrls: ['./info-banner.component.scss']
})
export class InfoBannerComponent {

  infoBannerTypes = InfoBannerTypes;
  @Input() bannerType: InfoBannerTypes = InfoBannerTypes.BANNER_1;

}

