import { Component, OnInit } from '@angular/core';
import { DistributorService } from './distributor.service';
import { Distributor } from './distributor.model';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {
  private Dis: Distributor;

  constructor(private _DisCalls: DistributorService) { }

  ngOnInit() {
    this.getDistributors();
  }

  public getDistributors(): void {
    this._DisCalls.GetDistributors().subscribe(data => { this.Dis = data.json() });
  }

}
