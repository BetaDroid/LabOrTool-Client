import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../../connection.service';

@Injectable()
export class ManufacturerService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http, private _host: ConnectionService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public getManufacturers = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/manufacturers/')
      .catch(this.handleError);
  };

  public getManufacturer = (id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/inventory/manufacturers/' + id)
      .catch(this.handleError);
  };

  public postManufacturer = (body): Observable<Response> => {
    return this._http.post(this._host.LabOrTool + '/inventory/manufacturers/', JSON.stringify(body), this.options)
      .catch(this.handleError);
  };

  public putManufacturer = (id: number, body): Observable<Response> => {
    return this._http.put(this._host.LabOrTool + '/inventory/manufacturers/' + id, JSON.stringify(body), this.options)
      .catch(this.handleError);
  };

  public deleteManufacturer = (id: number): Observable<Response> => {
    return this._http.delete(this._host.LabOrTool + '/inventory/manufacturers/' + id)
      .catch(this.handleError);
  };

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
