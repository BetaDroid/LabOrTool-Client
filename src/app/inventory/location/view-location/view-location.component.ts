import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LocationService} from "../location.service";

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.css']
})
export class ViewLocationComponent implements OnInit {
  locForm: FormGroup;
  private editable: boolean = false;
  id;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _locSer: LocationService
  ) {
    this.locForm = _formBuilder.group({
      'Id': new FormControl({value: '', disabled: true}),
      'Position': new FormControl({value: '', disabled: true}),
      'Container': new FormControl({value: '', disabled: true}),
      'SubContainer': new FormControl({value: '', disabled: true})
    });
    _route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnInit() {
    this.getLocation();
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

    if (!error) {
      this._locSer.PutLocation(this.id, _formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => {
          this.DisableEdit();
          this.getLocation();
        }
      );
    }
  }

  deleteLocation(_id: number) {
    this._locSer.DeleteLocation(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._router.navigate(['/inventory/locations']); }
    );
  }

  EnableEdit() {
    document.getElementById('position').removeAttribute('disabled');
    document.getElementById('container').removeAttribute('disabled');
    document.getElementById('subcontainer').removeAttribute('disabled');
    this.editable = true;
  }

  DisableEdit() {
    document.getElementById('position').setAttribute('disabled', 'true');
    document.getElementById('container').setAttribute('disabled', 'true');
    document.getElementById('subcontainer').setAttribute('disabled', 'true');
    this.editable = false;
  }

  private getLocation() {
    this._locSer.GetLocation(this.id).subscribe(data => {
      this.locForm = this._formBuilder.group({
        'Id': new FormControl({value: data.json().Id, disabled: true}),
        'Position': new FormControl({value: data.json().Position, disabled: true}),
        'Container': new FormControl({value: data.json().Container, disabled: true}),
        'SubContainer': new FormControl({value: data.json().SubContainer, disabled: true})
      });
    });
  }
}
