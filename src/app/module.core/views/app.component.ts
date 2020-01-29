import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sites-mngt';

  menuOpen = false;
  isLogin = true;
  user: Observable<User> = this.authService.$user;

  constructor(private authService: AuthService, private router: Router) {

    router.events.pipe(filter((event: any) => event instanceof NavigationStart)).subscribe(ev => {
      this.isLogin = ev.url === '/login';
      if (this.isLogin) {
        if (this.authService.isUserAuthenticated()) {
          router.navigate(['sites']);
        } else {
          // si no estoy autenticado y voy a login, cierro el menu
          this.menuOpen = false;
        }
      }
    });

    // router.events.subscribe(ev => {
    //   if (ev instanceof NavigationStart) {
    //     this.isLogin = ev.url === '/login';
    //     if (!this.isLogin) {
    //       this.menuOpen = false;
    //     }
    //   }
    // });
  }

  ngOnInit() {
  }


  logoutClicked() {
    this.authService.logout();
    this.menuOpen = false;
    this.router.navigate(['login']);
  }

  menuClicked() {
    this.menuOpen = !this.menuOpen;
  }
}
