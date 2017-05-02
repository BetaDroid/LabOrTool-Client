import { Component, OnInit } from '@angular/core';
import { DistributorService } from './distributor.service';
import { Distributor } from './distributor.model';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {
  private Distributors: Distributor[] = [];

  constructor(private _disCalls: DistributorService) { }

  ngOnInit() {
    this.GetDistributors();
  }

  public GetDistributors(): void {
    this._disCalls.getDistributors().subscribe(data => { this.Distributors = data.json() });
  }

}
