import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../../connection.service';

@Injectable()
export class CategoryParamTypeService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http,
              private _host: ConnectionService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public CountCPTs = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/category-param-types/count', this.options)
      .catch(this.handleError);
  }

  public GetCPTs = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/category-param-types/', this.options)
      .catch(this.handleError);
  }

  public GetCPT = (_id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/category-param-types/' + _id, this.options)
      .catch(this.handleError);
  }

  public PostCPT = (_body): Observable<Response> => {
    return this._http.post(this._host.LabOrTool + '/inventory/category-param-types/', JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public PutCPT = (_id: number, _body): Observable<Response> => {
    return this._http.put(this._host.LabOrTool + '/inventory/category-param-types/' + _id, JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public DeleteCPT = (_id: number): Observable<Response> => {
    return this._http.delete(this._host.LabOrTool + '/inventory/category-param-types/' + _id, this.options)
      .catch(this.handleError);
  }

  public SearchCPTs = (_text: string): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/category-param-types/search/' + _text, this.options)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().Error || 'Server error');
  }
}
