import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  error = false;
  constructor(private loginService: LoginService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {

  }

  login(email: string, password: string) {
    if (email && password) {
      this.loginService.login(email, password).subscribe(x => {
        if (x) {
          this.authService.storeUser(x);
          this.router.navigate(['sites']);
        } else {
          this.error = true;
        }

      })
    } else {
      this.error = true;
    }
  }
}
