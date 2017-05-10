import { Component, OnInit } from '@angular/core';
import {ComponentService} from "../component.service";
import {Router} from "@angular/router";
import {ComponentParamService} from "../../component-param/component-param.service";
import {CategoryParamTypeService} from "../../category-param-type/category-param-type.service";
import {forEach} from "@angular/router/src/utils/collection";
import {PrefixService} from "../../prefix/prefix.service";
import {ManufacturerService} from "../../manufacturer/manufacturer.service";
import {DistributorService} from "../../distributor/distributor.service";
import {LocationService} from "../../location/location.service";
import {FootprintService} from "../../footprint/footprint.service";
import {CategoryService} from "../../category/category.service";

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {
  counter: number = 0; CPTs = []; Prefixes = [];
  Manufacturers = []; Distributors = []; Locations = []; Footprints = []; Categories = [];

  constructor(
    private _comSer: ComponentService,
    private _copSer: ComponentParamService,
    private _cptSer: CategoryParamTypeService,
    private _preSer: PrefixService,
    private _manSer: ManufacturerService,
    private _disSer: DistributorService,
    private _locSer: LocationService,
    private _fooSer: FootprintService,
    private _catSer: CategoryService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._manSer.GetManufacturers().subscribe(data => {
      this.Manufacturers = data.json();
    });
    this._disSer.GetDistributors().subscribe(data => {
      this.Distributors = data.json();
    });
    this._locSer.GetLocations().subscribe(data => {
      this.Locations = data.json();
    });
    this._fooSer.GetFootprints().subscribe(data => {
      this.Footprints = data.json();
    });
    this._catSer.GetCategories().subscribe(data => {
      this.Categories = data.json();
    });
    this._cptSer.GetCatParamTypes().subscribe(
      data => {
        let tmp = data.json();
        for (let i = 0; i < tmp.length; i++) {
          this.CPTs[i] = "<option value='" + tmp[i].Id + "'>" + tmp[i].Name + "</option>";
        }
      }
    );
    this._preSer.GetPrefixes().subscribe(
      data => {
        let tmp = data.json();
        for (let i = 0; i < tmp.length; i++) {
          this.Prefixes[i] = "<option value='" + tmp[i].Id + "'>" + tmp[i].Name + "</option>";
        }
      }
    );
  }

  addComponentParam() {
    this.counter++;
    let componentParam = "" +
      "<div class='uk-margin'>" +
      "<label class='uk-form-label' for='cp" + this.counter + "'>Category parameter type</label>" +
      "<div class='uk-form-controls'>"+
      "<select class='uk-select' id='cp" + this.counter + "' name='CP" + this.counter + "' ngModel>" +
      "<option></option>" +
      this.CPTs +
      "</select>" +
      "</div>" +
      "</div>" +
      "<div class='uk-margin'>" +
      "<label class='uk-form-label' for='value" + this.counter + "'>Value</label>" +
      "<div class='uk-form-controls'>" +
      "<input class='uk-input' id='value" + this.counter + "' type='text' name='Value" + this.counter + "' ngModel>" +
      "</div>" +
      "</div>" +
      "<div class='uk-margin'>" +
      "<label class='uk-form-label' for='prefix" + this.counter + "'>Prefix</label>" +
      "<div class='uk-form-controls'>"+
      "<select class='uk-select' id='prefix" + this.counter + "' name='Prefix" + this.counter + "' ngModel>" +
      "<option></option>" +
      this.Prefixes +
      "</select>" +
      "</div>" +
      "</div>"
    ;

    let element = document.getElementById('CPs');
    element.innerHTML += componentParam;
  }

  onSubmit(_formData: any) {
    let error = false;

    if (_formData.Name === "") {
      document.getElementById('name').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('name').className = "uk-input";

    if (_formData.ManufacturerId === "") {
      document.getElementById('manufacturer').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('manufacturer').className = "uk-input";

    if (_formData.PartNumber === "") {
      document.getElementById('partnumber').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('partnumber').className = "uk-input";

    if (_formData.DistributorId === "") {
      document.getElementById('distributor').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('distributor').className = "uk-input";

    if (_formData.DistributorCode === "") {
      document.getElementById('dc').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('dc').className = "uk-input";

    if (_formData.Price === "") {
      document.getElementById('price').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('price').className = "uk-input";

    if (_formData.Code === "") {
      document.getElementById('code').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('code').className = "uk-input";

    if (_formData.LocationId === "") {
      document.getElementById('location').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('location').className = "uk-input";

    if (_formData.Datasheet === "") {
      document.getElementById('datasheet').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('datasheet').className = "uk-input";

    if (_formData.FootprintId === "") {
      document.getElementById('footprint').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('footprint').className = "uk-input";

    if (_formData.CategoryId === "") {
      document.getElementById('category').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('category').className = "uk-input";

    if (!error)
      this._comSer.PostComponent(_formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => { this._router.navigate(['/inventory/components']); }
      );
  }
}
