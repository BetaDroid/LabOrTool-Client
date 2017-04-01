import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../connection.service';

@Injectable()
export class LoginService {
  private URL: string;
  protected loggedIn = false;
  private options: RequestOptions;

  constructor(private _http: Http, private _Host: ConnectionService) {
    this.URL = _Host.LabOrTool;
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  public GetAuthToken(_Username: string, _Password: string): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa(_Username + ':' + _Password));
    this.options = new RequestOptions({ headers: headers });


    return this._http.get(this.URL + "/get-auth-token", this.options)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  public MakeLogin(data: any): boolean {
    if (data.Token) {
      localStorage.setItem('auth_token', data.Token);
      this.loggedIn = true;
      return true;
    } else
      return false;
  }

  public MakeLogout(): void {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  public CheckLogin(): any {
    return this.loggedIn;
  }
}
