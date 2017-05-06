import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from './manufacturer.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {
  Manufacturers = [];

  constructor(private _manSer: ManufacturerService) { }

  ngOnInit() {
    this._manSer.GetManufacturers().subscribe(data => { this.Manufacturers = data.json() });
  }

  deleteManufacturer(_id: number) {
    this._manSer.DeleteManufacturer(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._manSer.GetManufacturers().subscribe(data => { this.Manufacturers = data.json() }); }
    );
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._manSer.SearchManufacturer((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.Manufacturers = data.json();
        }
      );
    else
      this._manSer.GetManufacturers().subscribe(data => { this.Manufacturers = data.json() });
  }
}
