import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { LoginService } from "../../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(
      public cookieService: CookieService,
      private login: LoginService
  ) {}
  canActivate(){
    return this.login.checkToken();
  }
}
