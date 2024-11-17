import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private _router: Router) {}
  apiURL = 'https://dummyjson.com/auth/login';

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  getAccessToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }
  postLogin(username: string, password: string): Observable<any> {
    return this._http
      .post<any>(this.apiURL, { username: username, password: password })
      .pipe(
        tap((response) => {
          console.log(response);
          if (response && response.accessToken) {
            localStorage.setItem('accessToken', response.accessToken);
            this.tokenSubject.next(response.accessToken);
            console.log(response.accessToken);
          }
          // const token;
        })
      );
  }

  isLogedIn(): boolean {
    return this.tokenSubject.value !== null;
  }
  logout() {
    localStorage.removeItem('accessToken');
    this.tokenSubject.next(null);
    console.log('Logged out');
    this._router.navigate(['login']);
  }
}
