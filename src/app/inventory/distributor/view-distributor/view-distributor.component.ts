import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DistributorService} from "../distributor.service";

@Component({
  selector: 'app-view-distributor',
  templateUrl: './view-distributor.component.html',
  styleUrls: ['./view-distributor.component.css']
})
export class ViewDistributorComponent implements OnInit {
  disForm: FormGroup;
  private editable: boolean = false;
  id;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _disSer: DistributorService
  ) {
    this.disForm = _formBuilder.group({
      'Id': new FormControl({value: '', disabled: true}),
      'Name': new FormControl({value: '', disabled: true}),
      'Website': new FormControl({value: '', disabled: true})
    });
    _route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnInit() {
    this.getDistributor();
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
      this._disSer.PutDistributor(this.id, _formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => {
          this.DisableEdit();
          this.getDistributor();
        }
      );
    }
  }

  deleteDistributor(_id: number) {
    this._disSer.DeleteDistributor(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._router.navigate(['/inventory/distributors']); }
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

  private getDistributor() {
    this._disSer.GetDistributor(this.id).subscribe(data => {
      this.disForm = this._formBuilder.group({
        'Id': new FormControl({value: data.json().Id, disabled: true}),
        'Name': new FormControl({value: data.json().Name, disabled: true}),
        'Website': new FormControl({value: data.json().Website, disabled: true})
      });
    });
  }
}
