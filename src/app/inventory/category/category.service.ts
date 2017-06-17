import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../../connection.service';

@Injectable()
export class CategoryService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http,
              private _host: ConnectionService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public GetCategories = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/categories/', this.options)
      .catch(this.handleError);
  }

  public GetCategory = (_id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/categories/' + _id, this.options)
      .catch(this.handleError);
  }

  public PostCategory = (_body): Observable<Response> => {
    return this._http.post(this._host.LabOrTool + '/inventory/categories/', JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public PutCategory = (_id: number, _body): Observable<Response> => {
    return this._http.put(this._host.LabOrTool + '/inventory/categories/' + _id, JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public DeleteCategory = (_id: number): Observable<Response> => {
    return this._http.delete(this._host.LabOrTool + '/inventory/categories/' + _id, this.options)
      .catch(this.handleError);
  }

  public SearchCategory = (_text: string): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/categories/search/' + _text, this.options)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().Error || 'Server error');
  }
}
