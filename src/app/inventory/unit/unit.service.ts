import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../../connection.service';
import {LoginService} from "../../login/login.service";

@Injectable()
export class UnitService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http,
              private _host: ConnectionService,
              private _loginSer: LoginService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    //this.headers.append('Authorization', "Basic " + btoa(this._loginSer.token + ":"));

    this.options = new RequestOptions({ headers: this.headers });
  }

  public GetUnits = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/units/', this.options)
      .catch(this.handleError);
  };

  public GetUnit = (_id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/units/' + _id, this.options)
      .catch(this.handleError);
  };

  public PostUnit = (_body): Observable<Response> => {
    return this._http.post(this._host.LabOrTool + '/inventory/units/', JSON.stringify(_body), this.options)
      .catch(this.handleError);
  };

  public PutUnit = (_id: number, _body): Observable<Response> => {
    return this._http.put(this._host.LabOrTool + '/inventory/units/' + _id, JSON.stringify(_body), this.options)
      .catch(this.handleError);
  };

  public DeleteUnit = (_id: number): Observable<Response> => {
    return this._http.delete(this._host.LabOrTool + '/inventory/units/' + _id, this.options)
      .catch(this.handleError);
  };

  public SearchUnit = (_text: string): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/units/search/' + _text, this.options)
      .catch(this.handleError);
  };

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().Error || 'Server error');
  }
}
