import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfoBannerComponent } from './info-banner/info-banner.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    InfoBannerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    InfoBannerComponent,
    FooterComponent
  ]
})
export class SharedModule { }
