import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfoBannerComponent } from './info-banner/info-banner.component';



@NgModule({
  declarations: [
    NavBarComponent,
    InfoBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    InfoBannerComponent
  ]
})
export class SharedModule { }
