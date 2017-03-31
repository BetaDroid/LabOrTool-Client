import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionService {
  public LabOrTool: string = "http://127.0.0.1:5000/api/v1";
}
