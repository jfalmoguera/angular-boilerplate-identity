import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/entities';
import { Observable, Subscription } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from 'src/auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sites-mngt';

  menuOpen = false;

  usuario: User;

  subscriptions: Subscription[] = [];
  selectedLanguage = 'es';

  // Username/Passwort: max/geheim

  constructor(private oauthService: AuthService, private router: Router, private translateService: TranslocoService) {
    this.oauthService.startLogin();
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.setActiveLang(this.selectedLanguage);
  }

  ngOnInit() {
    return this.usuario = this.oauthService.getUser();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

 


  toogleLanguage(lang: string) {
    this.translateService.setActiveLang(lang);
  }


  logoutClicked() {
    this.oauthService.logOut();
    this.menuOpen = false;
    this.router.navigate(['login']);
  }

  menuClicked() {
    this.menuOpen = !this.menuOpen;
  }
}
