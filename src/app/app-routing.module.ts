import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './module.core/views/home/home.component';
import { AuthGuard } from './module.core/services/authGuard.';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
  },
  {
    path: 'sites',
    canActivate: [AuthGuard],
    loadChildren: () => import('./module.sites/sites.module').then(x => x.SitesModule)
  },
  {
    path: '**', redirectTo: '', canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
