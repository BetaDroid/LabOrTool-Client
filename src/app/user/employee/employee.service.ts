import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../../connection.service';

@Injectable()
export class EmployeeService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http,
              private _host: ConnectionService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public CountEmployees = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/user/employees/count/', this.options)
      .catch(this.handleError);
  }

  public GetEmployees = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/user/employees/', this.options)
      .catch(this.handleError);
  }

  public GetEmployeesShort = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/user/employees/', this.options)
      .catch(this.handleError);
  }

  public GetEmployee = (_id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/user/employees/' + _id, this.options)
      .catch(this.handleError);
  }

  public PostEmployee = (_body): Observable<Response> => {
    return this._http.post(this._host.LabOrTool + '/user/employees/', JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public PutEmployee = (_id: number, _body): Observable<Response> => {
    return this._http.put(this._host.LabOrTool + '/user/employees/' + _id, JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public DeleteEmployee = (_id: number): Observable<Response> => {
    return this._http.delete(this._host.LabOrTool + '/user/employees/' + _id, this.options)
      .catch(this.handleError);
  }

  public SearchEmployees = (_text: string): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/user/employees/search/' + _text, this.options)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().Error || 'Server error');
  }
}
