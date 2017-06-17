import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../connection.service';

@Injectable()
export class ProjectService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http,
              private _host: ConnectionService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public CountProjects = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/projects/count/', this.options)
      .catch(this.handleError);
  }

  public GetProjects = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/projects/', this.options)
      .catch(this.handleError);
  }

  public GetProject = (_id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/projects/' + _id, this.options)
      .catch(this.handleError);
  }

  public PostProject = (_body): Observable<Response> => {
    return this._http.post(this._host.LabOrTool + '/projects/', JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public PutProject = (_id: number, _body): Observable<Response> => {
    return this._http.put(this._host.LabOrTool + '/projects/' + _id, JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public DeleteProject = (_id: number): Observable<Response> => {
    return this._http.delete(this._host.LabOrTool + '/projects/' + _id, this.options)
      .catch(this.handleError);
  }

  public SearchProjects = (_text: string): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/projects/search/' + _text, this.options)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().Error || 'Server error');
  }
}
