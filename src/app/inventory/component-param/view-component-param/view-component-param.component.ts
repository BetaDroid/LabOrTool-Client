import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ComponentParamService } from "../component-param.service";
import { CategoryParamTypeService } from "../../category-param-type/category-param-type.service";
import { PrefixService } from "../../prefix/prefix.service";
import {ComponentService} from "../../component/component.service";

@Component({
  selector: 'app-view-component-param',
  templateUrl: './view-component-param.component.html',
  styleUrls: ['./view-component-param.component.css']
})
export class ViewComponentParamComponent implements OnInit {
  cpForm: FormGroup;
  private editable: boolean = false;
  id; CPTs = []; Prefixes = []; Components = [];


  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _cptSer: CategoryParamTypeService,
    private _cpSer: ComponentParamService,
    private _preSer: PrefixService,
    private _comSer: ComponentService) {
    this.cpForm = _formBuilder.group({
      'Id': new FormControl({value: '', disabled: true}),
      'ComponentId': new FormControl({value: '', disabled: true}),
      'CategoryParamTypeId': new FormControl({value: '', disabled: true}),
      'Value': new FormControl({value: '', disabled: true}),
      'PrefixId': new FormControl({value: '', disabled: true}),
      'Note': new FormControl({value: '', disabled: true})
    });
    _route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnInit() {
    this._comSer.GetComponents().subscribe(data => { this.Components = data.json(); });
    this._preSer.GetPrefixes().subscribe(data => { this.Prefixes = data.json(); });
    this._cptSer.GetCatParamTypes().subscribe(data => { this.CPTs = data.json(); });
    this.getCP();
  }

  onSubmit(_formData: any) {
    let error = false;

    if (_formData.ComponentId === "") {
      document.getElementById('component').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('component').className = "uk-input";

    if (_formData.CategoryParamTypeId === "") {
      document.getElementById('cpt').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('cpt').className = "uk-input";

    if (_formData.Value === "") {
      document.getElementById('value').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('value').className = "uk-input";

    if (_formData.PrefixId === "") {
      document.getElementById('prefix').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('prefix').className = "uk-input";

    if (!error) {
      this._cpSer.PutComponentParam(this.id, _formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => {
          this.DisableEdit();
          this.getCP();
        }
      );
    }
  }

  deleteCP(_id: number) {
    this._cpSer.DeleteComponentParam(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._router.navigate(['/inventory/components/view/' + this.cpForm.value.ComponentId ]); }
    );
  }

  EnableEdit() {
    document.getElementById('component').removeAttribute('disabled');
    document.getElementById('cpt').removeAttribute('disabled');
    document.getElementById('value').removeAttribute('disabled');
    document.getElementById('prefix').removeAttribute('disabled');
    document.getElementById('note').removeAttribute('disabled');
    this.editable = true;
  }

  DisableEdit() {
    document.getElementById('component').setAttribute('disabled', 'true');
    document.getElementById('cpt').setAttribute('disabled', 'true');
    document.getElementById('value').setAttribute('disabled', 'true');
    document.getElementById('prefix').setAttribute('disabled', 'true');
    document.getElementById('note').setAttribute('disabled', 'true');
    this.editable = false;
  }

  private getCP() {
    this._cpSer.GetComponentParam(this.id).subscribe(data => {
      this.cpForm = this._formBuilder.group({
        'Id': new FormControl({value: data.json().Id, disabled: true}),
        'ComponentId': new FormControl({value: data.json().ComponentId, disabled: true}),
        'CategoryParamTypeId': new FormControl({value: data.json().CategoryParamTypeId, disabled: true}),
        'Value': new FormControl({value: data.json().Value, disabled: true}),
        'PrefixId': new FormControl({value: data.json().PrefixId, disabled: true}),
        'Note': new FormControl({value: data.json().Note, disabled: true})
      });
    });
  }
}
