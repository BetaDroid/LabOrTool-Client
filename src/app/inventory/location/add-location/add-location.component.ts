import { Component, OnInit } from '@angular/core';
import {LocationService} from "../location.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  constructor(
    private _locSer: LocationService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(_formData: any) {
    let error = false;

    if (_formData.Position === "") {
      document.getElementById('position').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('position').className = "uk-input";

    if (_formData.Container === "") {
      document.getElementById('container').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('container').className = "uk-input";

    if (_formData.SubContainer === "") {
      document.getElementById('subcontainer').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('subcontainer').className = "uk-input";

    if (!error)
      this._locSer.PostLocation(_formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => { this._router.navigate(['/inventory/locations']); }
      );

  }

}
