import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }
  getAll(token) {
    const url = 'http://localhost:8000/api/users';
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(url, {headers})
    .pipe();
  }
}
