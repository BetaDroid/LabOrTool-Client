import { Component, OnInit } from '@angular/core';
import {FootprintService} from "../footprint.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-footprint',
  templateUrl: './add-footprint.component.html',
  styleUrls: ['./add-footprint.component.css']
})
export class AddFootprintComponent implements OnInit {

  constructor(
    private _fooSer: FootprintService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(_formData: any) {
    let error = false;

    if (_formData.Name === "") {
      document.getElementById('name').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('name').className = "uk-input";

    if (_formData.Link === "") {
      document.getElementById('link').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('link').className = "uk-input";

    if (!error)
      this._fooSer.PostFootprint(_formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => { this._router.navigate(['/inventory/footprints']); }
      );

  }
}
