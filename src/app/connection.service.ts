import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionService {
  //public LabOrTool: string = "http://ec2-52-56-173-141.eu-west-2.compute.amazonaws.com:5000";
  public LabOrTool: string = "http://127.0.0.1:8081/api/v1";
}
