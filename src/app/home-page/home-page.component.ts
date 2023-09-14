import { Component } from '@angular/core';
import { InfoBannerTypes } from 'src/shared/_models/enums';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  infoBannerTypes = InfoBannerTypes;
}
