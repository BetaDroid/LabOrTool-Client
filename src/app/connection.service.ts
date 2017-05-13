import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionService {
  public LabOrTool: string = "http://" + window.location.hostname + ":8081";
}
