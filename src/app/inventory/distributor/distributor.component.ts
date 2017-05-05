import { Component, OnInit } from '@angular/core';
import { DistributorService } from './distributor.service';
import { Distributor } from './distributor.model';
import {LoginService} from "../../login/login.service";

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {
  private Distributors: Distributor[] = [];

  constructor(private _disSer: DistributorService, private login: LoginService) { }

  ngOnInit() {
    this._disSer.getDistributors().subscribe(data => { this.Distributors = data.json() });
  }

  deleteDistributor(_id: number) {
    this._disSer.deleteDistributor(_id);
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._disSer.searchDistributor((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.Distributors = data.json();
        }
      );
    else
      this._disSer.getDistributors().subscribe(data => { this.Distributors = data.json() });
  }
}
