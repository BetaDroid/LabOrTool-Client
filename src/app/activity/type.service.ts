import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../connection.service';

@Injectable()
export class TypeService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http,
              private _host: ConnectionService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public CountTypes = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/types/count/', this.options)
      .catch(this.handleError);
  }

  public GetTypes = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/types/', this.options)
      .catch(this.handleError);
  }

  public GetType = (_id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/types/' + _id, this.options)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().Error || 'Server error');
  }
}
