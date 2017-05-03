import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-distributor',
  templateUrl: './add-distributor.component.html',
  styleUrls: ['./add-distributor.component.css']
})
export class AddDistributorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private onSubmit(form: any) {
    let error = false;

    if (form.name === "") {
      document.getElementById('name').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('name').className = "uk-input";

    if (form.website === "") {
      document.getElementById('website').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('website').className = "uk-input";

    console.log(form);
    // TODO: post call
  }

}
