import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitesComponent } from './sites/sites.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'sites-list',
  },
  {
    path: 'sites-list', component: SitesComponent,
  },
  {
    path: 'site-detail/:id', component: SiteDetailComponent
  },
  {
    path: 'site-detail', component: SiteDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitesRoutingModule { }
