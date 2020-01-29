import { Injectable } from '@angular/core';
import { User } from 'src/app/entities';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ZETES_USER = 'ZETES_USER';

  $user = new BehaviorSubject(this.getUser());

  constructor() {
    if (this.isUserAuthenticated) {
      this.$user.next(this.getUser());
    }
  }

  storeUser(usuario: User) {
    localStorage.setItem(this.ZETES_USER, JSON.stringify(usuario));
    this.$user.next(usuario);
  }

  logout() {
    localStorage.removeItem(this.ZETES_USER);
  }

  isUserAuthenticated(): boolean {
    return localStorage.getItem(this.ZETES_USER) !== null;
  }

  getUser(): User {
    if (this.isUserAuthenticated) {
      return new User(JSON.parse(localStorage.getItem(this.ZETES_USER)));
    }
    return null;
  }
}
