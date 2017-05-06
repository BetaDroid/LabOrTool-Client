import { Component, OnInit } from '@angular/core';
import {FootprintService} from "./footprint.service";

@Component({
  selector: 'app-footprint',
  templateUrl: './footprint.component.html',
  styleUrls: ['./footprint.component.css']
})
export class FootprintComponent implements OnInit {
  Footprints = [];

  constructor(private _fooSer: FootprintService) { }

  ngOnInit() {
    this._fooSer.GetFootprints().subscribe(data => { this.Footprints = data.json() });
  }

  deleteFootprint(_id: number) {
    this._fooSer.DeleteFootprint(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._fooSer.GetFootprints().subscribe(data => { this.Footprints = data.json() }); }
    );
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._fooSer.SearchFootprint((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.Footprints = data.json();
        }
      );
    else
      this._fooSer.GetFootprints().subscribe(data => { this.Footprints = data.json() });
  }
}
