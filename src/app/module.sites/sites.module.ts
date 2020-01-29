import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { COMPONENTS } from './index';
import { SitesRoutingModule } from './sites-routing.module';
import { SharedModule } from '../module.shared/shared.module';
import { DataReferenceService } from './services/data-reference.service';
import { SiteService } from './services/site.service';

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    SitesRoutingModule
  ],
  providers: [DataReferenceService, SiteService]
})
export class SitesModule { }
