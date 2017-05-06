import { Component, OnInit } from '@angular/core';
import {ManufacturerService} from "../manufacturer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.css']
})
export class AddManufacturerComponent implements OnInit {
  constructor(
    private _manSer: ManufacturerService,
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

    if (_formData.Website === "") {
      document.getElementById('website').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('website').className = "uk-input";

    if (!error)
      this._manSer.PostManufacturer(_formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => { this._router.navigate(['/inventory/manufacturers']); }
      );

  }
}
