import { Component, OnInit } from '@angular/core';
import {DistributorService} from "../distributor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-distributor',
  templateUrl: './add-distributor.component.html',
  styleUrls: ['./add-distributor.component.css']
})
export class AddDistributorComponent implements OnInit {

  constructor(
    private _disSer: DistributorService,
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
      this._disSer.PostDistributor(_formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => { this._router.navigate(['/inventory/distributors']); }
      );

  }

}
