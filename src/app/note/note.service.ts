import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConnectionService } from '../connection.service';

@Injectable()
export class NoteService {
  private headers: Headers;
  private options: RequestOptions;

  constructor(private _http: Http,
              private _host: ConnectionService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });
  }

  public CountPerParent = (_id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/notes/count/' + _id, this.options)
      .catch(this.handleError);
  }

  public CountNotes = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/notes/count/', this.options)
      .catch(this.handleError);
  }

  public GetNotes = (): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/notes/', this.options)
      .catch(this.handleError);
  }

  public GetNote = (_id: number): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/notes/' + _id, this.options)
      .catch(this.handleError);
  }

  public PostNote = (_body): Observable<Response> => {
    return this._http.post(this._host.LabOrTool + '/notes/', JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public PutNote = (_id: number, _body): Observable<Response> => {
    return this._http.put(this._host.LabOrTool + '/notes/' + _id, JSON.stringify(_body), this.options)
      .catch(this.handleError);
  }

  public DeleteNote = (_id: number): Observable<Response> => {
    return this._http.delete(this._host.LabOrTool + '/notes/' + _id, this.options)
      .catch(this.handleError);
  }

  public SearchNotes = (_text: string): Observable<Response> => {
    return this._http.get(this._host.LabOrTool + '/notes/search/' + _text, this.options)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().Error || 'Server error');
  }
}
