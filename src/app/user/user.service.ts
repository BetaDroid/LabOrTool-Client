import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { ConnectionService } from '../connection.service';
import { User } from './user.model';
import { LoginService } from '../login/login.service';

@Injectable()
export class UserService {
  private options: RequestOptions;

  constructor(private http: Http, private _host: ConnectionService, private _logSer: LoginService) {

  }

  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this._logSer.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get(this._host.LabOrTool + '/api/v1/users/', options)
      .map((response: Response) => response.json());
  }

}
