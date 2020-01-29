import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './views/app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from '../module.shared/shared.module';
import { CORE_COMPONENTS } from './components';
import { LoginComponent } from './views/login/login.component';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [LoginService],
  declarations: [AppComponent, HomeComponent, LoginComponent, CORE_COMPONENTS]
})
export class CoreModule { }
