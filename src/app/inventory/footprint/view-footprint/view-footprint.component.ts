import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FootprintService} from "../footprint.service";

@Component({
  selector: 'app-view-footprint',
  templateUrl: './view-footprint.component.html',
  styleUrls: ['./view-footprint.component.css']
})
export class ViewFootprintComponent implements OnInit {
  fooForm: FormGroup;
  private editable: boolean = false;
  id;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _fooSer: FootprintService
  ) {
    this.fooForm = _formBuilder.group({
      'Id': new FormControl({value: '', disabled: true}),
      'Name': new FormControl({value: '', disabled: true}),
      'Link': new FormControl({value: '', disabled: true})
    });
    _route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnInit() {
    this.getFootprint();
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

    if (!error) {
      this._fooSer.PutFootprint(this.id, _formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => {
          this.DisableEdit();
          this.getFootprint();
        }
      );
    }
  }

  deleteFootprint(_id: number) {
    this._fooSer.DeleteFootprint(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._router.navigate(['/inventory/footprints']); }
    );
  }

  EnableEdit() {
    document.getElementById('name').removeAttribute('disabled');
    document.getElementById('link').removeAttribute('disabled');
    this.editable = true;
  }

  DisableEdit() {
    document.getElementById('name').setAttribute('disabled', 'true');
    document.getElementById('link').setAttribute('disabled', 'true');
    this.editable = false;
  }

  private getFootprint() {
    this._fooSer.GetFootprint(this.id).subscribe(data => {
      this.fooForm = this._formBuilder.group({
        'Id': new FormControl({value: data.json().Id, disabled: true}),
        'Name': new FormControl({value: data.json().Name, disabled: true}),
        'Link': new FormControl({value: data.json().Link, disabled: true})
      });
    });
  }
}
