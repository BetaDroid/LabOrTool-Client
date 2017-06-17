import { Component, OnInit } from '@angular/core';
import { ProductionService } from './production.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  Productions = [];

  constructor(private _proSer: ProductionService) { }

  ngOnInit() {
    this._proSer.GetProductions().subscribe(data => { this.Productions = data.json(); }, () => {}, () => {console.log(this.Productions); });
  }

  deleteProduction(_id: number) {
    this._proSer.DeleteProduction(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._proSer.GetProductions().subscribe(data => { this.Productions = data.json(); }); }
    );
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._proSer.SearchProductions((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.Productions = data.json();
        }
      );
    else
      this._proSer.GetProductions().subscribe(data => { this.Productions = data.json(); });
  }
}
