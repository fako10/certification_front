import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const USER_PASSWORD = 'password';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  emailValidation(username: string, password: string, validationCode:string): Observable<any> {
    return this.http.post(AUTH_API + 'emailvalidation', {
      username,
      validationCode,
      password
    }, httpOptions);
  }

  public savePassword(password: string): void {
    window.sessionStorage.removeItem(USER_PASSWORD);
    window.sessionStorage.setItem(USER_PASSWORD, password);
  }

  public getPassword(): string | null {
    return window.sessionStorage.getItem(USER_PASSWORD);
  }

}
