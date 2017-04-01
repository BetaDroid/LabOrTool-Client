import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { ConnectionService } from '../connection.service';

@Injectable()
export class LoginService {
  protected loggedIn = false;
  private URL: string;
  private options: RequestOptions;

  constructor(private _http: Http, private _Host: ConnectionService) {
    this.URL = _Host.LabOrTool;
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  make_login(_Username: string, _Password: string): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa(_Username + ':' + _Password));
    this.options = new RequestOptions({ headers: headers });

    return this._http.get(this.URL + "/get-auth-token", this.options).subscribe((res: Response) => {
      let data = res.json();
      localStorage.setItem('auth_token', data.Token);
      this.loggedIn = true;
    });
  }

  make_logout(): void {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  check_login(): any {
    return this.loggedIn;
  }
}
