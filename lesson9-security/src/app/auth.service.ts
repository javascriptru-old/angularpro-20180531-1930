import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
declare var auth0;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'xDB5CVTZmqvIBKh9865ZqZ4lJkSHNM2c',
    domain: 'pri.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://pri.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });

  constructor() { }

  public login() {
    this.auth0.authorize();
  }

  public handleAuth() {
    this.auth0.parseHash((error, authResult) => {
      debugger
       if(authResult && authResult.accessToken && authResult.idToken ) {
        this.setSession(authResult);
       } else {
         console.log(error);
       }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  isAuth(): Observable<boolean> {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    debugger
    return new Date().getTime() < expiresAt;
  }
}
