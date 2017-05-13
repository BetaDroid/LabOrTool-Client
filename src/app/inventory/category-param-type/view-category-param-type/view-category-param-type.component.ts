import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryParamTypeService } from "../category-param-type.service";
import {CategoryService} from "../../category/category.service";
import {UnitService} from "../../unit/unit.service";

@Component({
  selector: 'app-view-category-param-type',
  templateUrl: './view-category-param-type.component.html',
  styleUrls: ['./view-category-param-type.component.css']
})
export class ViewCategoryParamTypeComponent implements OnInit {
  cptForm: FormGroup;
  private editable: boolean = false;
  id; Categories = []; Units = [];


  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _cptSer: CategoryParamTypeService,
    private _catSer: CategoryService,
    private _uniSer: UnitService) {
    this.cptForm = _formBuilder.group({
      'Id': new FormControl({value: '', disabled: true}),
      'Name': new FormControl({value: '', disabled: true}),
      'CategoryId': new FormControl({value: '', disabled: true}),
      'UnitId': new FormControl({value: '', disabled: true}),
      'Order': new FormControl({value: '', disabled: true}),
      'Note': new FormControl({value: '', disabled: true})
    });
    _route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnInit() {
    this._catSer.GetCategories().subscribe(data => { this.Categories = data.json(); });
    this._uniSer.GetUnits().subscribe(data => { this.Units = data.json(); });
    this.getCPT();
  }

  onSubmit(_formData: any) {
    let error = false;

    if (_formData.Name === "") {
      document.getElementById('name').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('name').className = "uk-input";

    if (_formData.CategoryId === "") {
      document.getElementById('category').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('category').className = "uk-input";

    if (_formData.UnitId === "") {
      document.getElementById('unit').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('unit').className = "uk-input";

    if (_formData.Order === "") {
      document.getElementById('order').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('order').className = "uk-input";

    if (!error) {
      this._cptSer.PutCatParamType(this.id, _formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => {
          this.DisableEdit();
          this.getCPT();
        }
      );
    }
  }

  deleteCPT(_id: number) {
    this._cptSer.DeleteCatParamType(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._router.navigate(['/inventory/categories-param-types']); }
    );
  }

  EnableEdit() {
    document.getElementById('name').removeAttribute('disabled');
    document.getElementById('category').removeAttribute('disabled');
    document.getElementById('unit').removeAttribute('disabled');
    document.getElementById('order').removeAttribute('disabled');
    document.getElementById('note').removeAttribute('disabled');
    this.editable = true;
  }

  DisableEdit() {
    document.getElementById('name').setAttribute('disabled', 'true');
    document.getElementById('category').setAttribute('disabled', 'true');
    document.getElementById('unit').setAttribute('disabled', 'true');
    document.getElementById('order').setAttribute('disabled', 'true');
    document.getElementById('note').setAttribute('disabled', 'true');
    this.editable = false;
  }

  private getCPT() {
    this._cptSer.GetCatParamType(this.id).subscribe(data => {
      this.cptForm = this._formBuilder.group({
        'Id': new FormControl({value: data.json().Id, disabled: true}),
        'Name': new FormControl({value: data.json().Name, disabled: true}),
        'CategoryId': new FormControl({value: data.json().CategoryId, disabled: true}),
        'UnitId': new FormControl({value: data.json().UnitId, disabled: true}),
        'Order': new FormControl({value: data.json().Order, disabled: true}),
        'Note': new FormControl({value: data.json().Note, disabled: true})
      });
    });
  }
}
