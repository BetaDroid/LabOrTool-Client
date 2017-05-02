import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../../connection.service';
import { LoginService } from '../../login/login.service';

@Injectable()
export class DistributorService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http, private _host: ConnectionService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public getDistributors = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/distributors/')
      .catch(this.handleError);
  };

  public getDistributor = (id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/distributors/' + id)
      .catch(this.handleError);
  };

  public postDistributor = (body): Observable<Response> => {
    return this._http.post(this._host.LabOrTool + '/inventory/distributors/', JSON.stringify(body), this.options)
      .catch(this.handleError);
  };

  public putDistributor = (id: number, body): Observable<Response> => {
    return this._http.put(this._host.LabOrTool + '/inventory/distributors/' + id, JSON.stringify(body), this.options)
      .catch(this.handleError);
  };

  public deleteDistributor = (id: number): Observable<Response> => {
    return this._http.delete(this._host.LabOrTool + '/inventory/distributors/' + id)
      .catch(this.handleError);
  };

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
