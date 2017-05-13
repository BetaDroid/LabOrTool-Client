import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { ComponentParamService } from "../component-param.service";
import { CategoryParamTypeService } from "../../category-param-type/category-param-type.service";
import { PrefixService } from "../../prefix/prefix.service";
import {isNumber} from "util";

@Component({
  selector: 'app-add-component-param',
  templateUrl: './add-component-param.component.html',
  styleUrls: ['./add-component-param.component.css']
})
export class AddComponentParamComponent implements OnInit {
  id; CPTs = []; Prefixes = [];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _cpSer: ComponentParamService,
    private _cptSer: CategoryParamTypeService,
    private _preSer: PrefixService) {
    _route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnInit() {
    this._cptSer.GetCatParamTypes().subscribe(data => { this.CPTs = data.json(); });
    this._preSer.GetPrefixes().subscribe(data => { this.Prefixes = data.json(); });
  }

  onSubmit(_formData: any) {
    let error = false;
    _formData.Component = this.id;

    if (_formData.CPT === "") {
      document.getElementById('cpt').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('cpt').className = "uk-input";

    if (_formData.Value === "") {
      document.getElementById('value').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('value').className = "uk-input";

    if (_formData.Prefix === "") {
      document.getElementById('prefix').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('prefix').className = "uk-input";

    //console.log(_formData);

    if (!error)
      this._cpSer.PostComponentParams(_formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => { this._router.navigate(['/inventory/components/view/' + this.id]); }
      );
  }
}
