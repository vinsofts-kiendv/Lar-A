import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
      private http: HttpClient,
      private cookieService: CookieService,
      private router: Router) { }
  login(value) : Observable<any> {
    const url = 'http://localhost:8000/api/login';
    const body = JSON.stringify(value);
    return this.http.post<any>(url, body)
    .pipe();
  }
  async checkToken() {
    if (this.cookieService.get('Token')) {
      const url = 'http://localhost:8000/api/checkToken';
      const headers = new HttpHeaders().set('Authorization', this.cookieService.get('Token'));
      const data = await this.http.get(url, {headers})
      .toPromise();
      if (data['message'] === 'ok') {
        return true;
      }
    }
    this.cookieService.delete('Token');
    this.router.navigate(['/login']);
    return false;
  }
}
