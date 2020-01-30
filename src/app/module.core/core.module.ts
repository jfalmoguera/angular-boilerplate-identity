import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { translocoConfig, TRANSLOCO_CONFIG, TRANSLOCO_LOADER, TranslocoModule } from '@ngneat/transloco';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../module.shared/shared.module';
import { CORE_COMPONENTS } from './components';
import { LoginService } from './services/login.service';
import { TranslocoHttpLoader } from './services/transloco-http-loader.service';
import { AppComponent } from './views/app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TranslocoModule
  ],
  providers: [LoginService,
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'es'],
        defaultLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: environment.production,
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
  ],
  declarations: [AppComponent, HomeComponent, LoginComponent, CORE_COMPONENTS]
})
export class CoreModule { }
