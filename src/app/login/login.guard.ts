import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private _router: Router,
              private _loginSer: LoginService) {}

  canActivate(): boolean {
    const prova = this._loginSer.isLoggedIn();
    console.log(prova);
    if (prova) {
      return true;
    }
    this._router.navigate(['/login']);
    return false;
  }
}
