import { Component, OnInit } from '@angular/core';
import {Manufacturer} from "./manufacturer.model";
import {ManufacturerService} from "./manufacturer.service";

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {
  private Manufacturers: Manufacturer[] = [];

  constructor(private _manCalls: ManufacturerService) { }

  ngOnInit() {
    this._manCalls.getManufacturers().subscribe(data => { this.Manufacturers = data.json() });
  }

}
