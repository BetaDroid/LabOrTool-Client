import { Component, OnInit } from '@angular/core';
import { DistributorService } from './distributor.service';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {
  Distributors = [];

  constructor(private _disSer: DistributorService) { }

  ngOnInit() {
    this._disSer.GetDistributors().subscribe(data => { this.Distributors = data.json() });
  }

  deleteDistributor(_id: number) {
    this._disSer.DeleteDistributor(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._disSer.GetDistributors().subscribe(data => { this.Distributors = data.json() }); }
    );
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._disSer.SearchDistributor((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.Distributors = data.json();
        }
      );
    else
      this._disSer.GetDistributors().subscribe(data => { this.Distributors = data.json() });
  }
}
