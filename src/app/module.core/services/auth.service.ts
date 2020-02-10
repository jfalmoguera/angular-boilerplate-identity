import { Injectable } from '@angular/core';
import { User } from 'src/app/entities';
import { BehaviorSubject, Observable } from 'rxjs';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from 'src/auth.config';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthService: OAuthService) {
  }


  startLogin() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  logOut() {
    this.oauthService.logOut();
  }
  
  isUserAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  getUser(): User {
    if (this.isUserAuthenticated) {
      const u: any = this.oauthService.getIdentityClaims();

      return new User({
        name: u.given_name,
        surname: '',
        email: u.email
      });
    }
    return null;
  }
}
