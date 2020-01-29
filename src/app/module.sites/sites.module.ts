import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { COMPONENTS } from './index';
import { SitesRoutingModule } from './sites-routing.module';
import { SharedModule } from '../module.shared/shared.module';

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    SitesRoutingModule
  ]
})
export class SitesModule { }
