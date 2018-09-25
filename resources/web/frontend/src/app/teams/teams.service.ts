import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private http: HttpClient
  ) { }
  getTeams(token: string) {
    const url = 'http://localhost:8000/api/teams';
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(url,{headers})
    .pipe();
  }
  getTeam(token: string, id) {
    const url = 'http://localhost:8000/api/teams/'+ id;
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(url,{headers})
    .pipe();
  }
  createTeam(token: string, value) {
    const url = 'http://localhost:8000/api/teams';
    const headers = new HttpHeaders().set('Authorization', token);
    const body = JSON.stringify(value);
    return this.http.post(url, body, {headers})
    .pipe();
  }
  updateTeam(token: string, value, id) {
    const url = 'http://localhost:8000/api/teams/' + id;
    const headers = new HttpHeaders().set('Authorization', token);
    const body = JSON.stringify(value);
    return this.http.put(url, body, {headers})
    .pipe();
  }
  deleteTeam(token: string, id) {
    const url = 'http://localhost:8000/api/teams/' + id;
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.delete(url, {headers})
    .pipe();
  }
}
