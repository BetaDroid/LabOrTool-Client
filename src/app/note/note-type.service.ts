import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../connection.service';

@Injectable()
export class NoteTypeService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http,
              private _host: ConnectionService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public CountNoteTypes = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/notes/types/count/', this.options)
      .catch(this.handleError);
  }

  public GetNoteTypes = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/notes/types/', this.options)
      .catch(this.handleError);
  }

  public GetNoteType = (_id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/notes/types/' + _id, this.options)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().Error || 'Server error');
  }
}
