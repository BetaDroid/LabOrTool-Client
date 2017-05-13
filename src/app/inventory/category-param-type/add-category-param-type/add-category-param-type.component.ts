import { Component, OnInit } from '@angular/core';
import {CategoryParamTypeService} from "../category-param-type.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../category/category.service";
import {UnitService} from "../../unit/unit.service";

@Component({
  selector: 'app-add-category-param-type',
  templateUrl: './add-category-param-type.component.html',
  styleUrls: ['./add-category-param-type.component.css']
})
export class AddCategoryParamTypeComponent implements OnInit {
  Categories = [];
  Units = [];

  constructor(
    private _cptSer: CategoryParamTypeService,
    private _router: Router,
    private _catSer: CategoryService,
    private _uniSer: UnitService) { }

  ngOnInit() {
    this._catSer.GetCategories().subscribe(data => { this.Categories = data.json(); });
    this._uniSer.GetUnits().subscribe(data => { this.Units = data.json(); });
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

    if (!error)
      this._cptSer.PostCatParamType(_formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => { this._router.navigate(['/inventory/categories-param-types']); }
      );
  }
}
