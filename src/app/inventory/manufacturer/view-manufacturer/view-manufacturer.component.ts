import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ManufacturerService} from "../manufacturer.service";

@Component({
  selector: 'app-view-manufacturer',
  templateUrl: './view-manufacturer.component.html',
  styleUrls: ['./view-manufacturer.component.css']
})
export class ViewManufacturerComponent implements OnInit {
  manForm: FormGroup;
  private editable: boolean = false;
  id;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _manSer: ManufacturerService
  ) {
    this.manForm = _formBuilder.group({
      'Id': new FormControl({value: '', disabled: true}),
      'Name': new FormControl({value: '', disabled: true}),
      'Website': new FormControl({value: '', disabled: true})
    });
    _route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnInit() {
    this.getManufacturer();
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

    if (!error) {
      this._manSer.PutManufacturer(this.id, _formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => {
          this.DisableEdit();
          this.getManufacturer();
        }
      );
    }
  }

  deleteManufacturer(_id: number) {
    this._manSer.DeleteManufacturer(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._router.navigate(['/inventory/manufacturers']); }
    );
  }

  EnableEdit() {
    document.getElementById('name').removeAttribute('disabled');
    document.getElementById('website').removeAttribute('disabled');
    this.editable = true;
  }

  DisableEdit() {
    document.getElementById('name').setAttribute('disabled', 'true');
    document.getElementById('website').setAttribute('disabled', 'true');
    this.editable = false;
  }

  private getManufacturer() {
    this._manSer.GetManufacturer(this.id).subscribe(data => {
      this.manForm = this._formBuilder.group({
        'Id': new FormControl({value: data.json().Id, disabled: true}),
        'Name': new FormControl({value: data.json().Name, disabled: true}),
        'Website': new FormControl({value: data.json().Website, disabled: true})
      });
    });
  }
}
