import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cookieValue;
  constructor(
      private router: Router,
      private loginService: LoginService,
      private cookieService: CookieService) { }

  ngOnInit() {
  }
  onSubmit(login) {
    this.loginService.login(login.value)
    .subscribe(result => {
      this.cookieValue = result;
      this.setCookies();
    });
  }
  setCookies() {
    this.cookieService.set( 'Token', this.cookieValue.token);
    this.toHome();
  }
  toHome() {
    this.router.navigate(['admin']);
  }
}
