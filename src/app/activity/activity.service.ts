import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../connection.service';

@Injectable()
export class ActivityService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http,
              private _host: ConnectionService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public CountActivities = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/activities/count/', this.options)
      .catch(this.handleError);
  }

  public GetActivities = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/activities/', this.options)
      .catch(this.handleError);
  }

  public GetActivity = (_id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/activities/' + _id, this.options)
      .catch(this.handleError);
  }

  public PostActivity = (_body): Observable<Response> => {
    return this._http.post(this._host.LabOrTool + '/activities/', JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public PutActivity = (_id: number, _body): Observable<Response> => {
    return this._http.put(this._host.LabOrTool + '/activities/' + _id, JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public DeleteActivity = (_id: number): Observable<Response> => {
    return this._http.delete(this._host.LabOrTool + '/activities/' + _id, this.options)
      .catch(this.handleError);
  }

  public SearchActivities = (_text: string): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/activities/search/' + _text, this.options)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().Error || 'Server error');
  }
}
