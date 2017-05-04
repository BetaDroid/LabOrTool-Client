import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ConnectionService } from '../connection.service';

@Injectable()
export class LoginService {
  public token: string;

  constructor(private _http: Http, private _host: ConnectionService) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.Token;
  }

  public makeLogin(username: string, password: string) {
    let headers = new Headers(), error = false;
    headers.append('Authorization', "Basic " + btoa(username + ":" + password));
    this._http.get(this._host.LabOrTool + "/get-auth-token", { headers: headers }).subscribe(data => {
      let response = data.json();
      if (response.Token && response.Token !== "") {
        this.token = response.Token;
        localStorage.setItem('currentUser', JSON.stringify({ Username: username, Token: response.Token }));
      } else
        error = true;
    });

    return (!error);
  };

  public makeLogout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
