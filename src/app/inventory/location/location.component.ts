import { Component, OnInit } from '@angular/core';
import {LocationService} from "./location.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  Locations = [];

  constructor(private _locSer: LocationService) { }

  ngOnInit() {
    this._locSer.GetLocations().subscribe(data => { this.Locations = data.json() });
  }

  deleteLocation(_id: number) {
    this._locSer.DeleteLocation(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._locSer.GetLocations().subscribe(data => { this.Locations = data.json() }); }
    );
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._locSer.SearchLocation((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.Locations = data.json();
        }
      );
    else
      this._locSer.GetLocations().subscribe(data => { this.Locations = data.json() });
  }
}
