import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../connection.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http,
              private _host: ConnectionService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }
  /*
  public makeLogin = (_username: string, _password: string): Observable<boolean> => {
    let response; let status = false;
    this._http.post(this._host.LabOrTool + '/login', { 'username': _username, 'password': _password }, this.options).subscribe(data => {
      response = data.json();
    }, () => {}, () => {
      if (response && response.Username === _username) {
        console.log('sono qui');
        localStorage.setItem('currentUser', JSON.stringify(response));
        status = true;
      }
      return status;
    });
  }
  */

  public makeLogin = (_username: string, _password: string): Observable<boolean> => {
    return this._http.post(this._host.LabOrTool + '/login', { 'username': _username, 'password': _password }, this.options)
      .map(this.extractData).catch(this.handleError);
  }

  public makeLogout = (): void => {
    this._http.get(this._host.LabOrTool + '/logout', this.options);
    localStorage.removeItem('currentUser');
  }

  public getUser = (): any => {
    return localStorage.getItem('currentUser');
  }

  public isLoggedIn = (): boolean => {
    return this.getUser() !== null;
  }

  private extractData(res: Response) {
    const body = res.json();
    if (body && body.Username !== '') {
      localStorage.setItem('currentUser', JSON.stringify(body));
      return true;
    }
    return false;
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
