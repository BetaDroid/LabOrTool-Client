import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { ConnectionService } from '../connection.service';
import { User } from '../user/user.model';

@Injectable()
export class LoginService {

  public token: string;

  constructor(private _http: Http, private _host: ConnectionService) {
  }

  public login = (username: string, password: string): Observable<Response> => {
    let headers = new Headers();
    headers.append('Authorization', "Basic " + btoa(username + ":" + password));
    return this._http.get('http://127.0.0.1:5000/get-auth-token', {headers: headers});
  };

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
