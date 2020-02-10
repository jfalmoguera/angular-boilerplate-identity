import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { translocoConfig, TRANSLOCO_CONFIG, TRANSLOCO_LOADER, TranslocoModule } from '@ngneat/transloco';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../module.shared/shared.module';
import { CORE_COMPONENTS } from './components';
import { LoginService } from './services/login.service';
import { AppComponent } from './views/app.component';
import { HomeComponent } from './views/home/home.component';
import { TranslocoRootModule } from '../module.transloco/transloco.module';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TranslocoRootModule,
    OAuthModule.forRoot()
  ],
  providers: [LoginService,
  ],
  declarations: [AppComponent, HomeComponent, CORE_COMPONENTS]
})
export class CoreModule { }
