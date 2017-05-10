import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ComponentService } from "../component.service";
import { ManufacturerService } from "../../manufacturer/manufacturer.service";
import { DistributorService } from "../../distributor/distributor.service";
import { LocationService } from "../../location/location.service";
import { FootprintService } from "../../footprint/footprint.service";
import { CategoryService } from "../../category/category.service";
import { ComponentParamService } from "../../component-param/component-param.service";
import { PrefixService } from "../../prefix/prefix.service";
import { CategoryParamTypeService } from "../../category-param-type/category-param-type.service";
@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  cmpForm: FormGroup; cpsForms: FormGroup[] = [];
  private editable: boolean = false;
  id; Manufacturers = []; Distributors = []; Locations = [];
  Footprints = []; Categories = []; CPTs = []; Prefixes = [];


  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _cmpSer: ComponentService,
    private _manSer: ManufacturerService,
    private _disSer: DistributorService,
    private _locSer: LocationService,
    private _fooSer: FootprintService,
    private _catSer: CategoryService,
    private _cpsSer: ComponentParamService,
    private _cptSer: CategoryParamTypeService,
    private _preSer: PrefixService) {
    this.cmpForm = _formBuilder.group({
      'Id': new FormControl({value: '', disabled: true}),
      'Name': new FormControl({value: '', disabled: true}),
      'ManufacturerId': new FormControl({value: '', disabled: true}),
      'PartNumber': new FormControl({value: '', disabled: true}),
      'DistributorId': new FormControl({value: '', disabled: true}),
      'DistributorCode': new FormControl({value: '', disabled: true}),
      'Price': new FormControl({value: '', disabled: true}),
      'Code': new FormControl({value: '', disabled: true}),
      'LocationId': new FormControl({value: '', disabled: true}),
      'Datasheet': new FormControl({value: '', disabled: true}),
      'FootprintId': new FormControl({value: '', disabled: true}),
      'CategoryId': new FormControl({value: '', disabled: true}),
      'Note': new FormControl({value: '', disabled: true})
    });

    _route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnInit() {
    this.getComponent();

    this._cptSer.GetCatParamTypes().subscribe(data => {
      this.CPTs = data.json();
    });
    this._preSer.GetPrefixes().subscribe(data => {
      this.Prefixes = data.json();
    });
    this.getCP();

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

    if (!error) {
      this._cmpSer.PutComponent(this.id, _formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => {
          this.DisableEdit();
          this.getComponent();
        }
      );
    }
  }

  deleteComponent(_id: number) {
    this._cmpSer.DeleteComponent(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._router.navigate(['/inventory/components']); }
    );
  }

  EnableEdit() {
    document.getElementById('name').removeAttribute('disabled');
    document.getElementById('manufacturer').removeAttribute('disabled');
    document.getElementById('partnumber').removeAttribute('disabled');
    document.getElementById('distributor').removeAttribute('disabled');
    document.getElementById('dc').removeAttribute('disabled');
    document.getElementById('price').removeAttribute('disabled');
    document.getElementById('code').removeAttribute('disabled');
    document.getElementById('location').removeAttribute('disabled');
    document.getElementById('datasheet').removeAttribute('disabled');
    document.getElementById('footprint').removeAttribute('disabled');
    document.getElementById('category').removeAttribute('disabled');
    document.getElementById('note').removeAttribute('disabled');
    this.editable = true;
  }

  DisableEdit() {
    document.getElementById('name').setAttribute('disabled', 'true');
    document.getElementById('manufacturer').setAttribute('disabled', 'true');
    document.getElementById('partnumber').setAttribute('disabled', 'true');
    document.getElementById('distributor').setAttribute('disabled', 'true');
    document.getElementById('dc').setAttribute('disabled', 'true');
    document.getElementById('price').setAttribute('disabled', 'true');
    document.getElementById('code').setAttribute('disabled', 'true');
    document.getElementById('location').setAttribute('disabled', 'true');
    document.getElementById('datasheet').setAttribute('disabled', 'true');
    document.getElementById('footprint').setAttribute('disabled', 'true');
    document.getElementById('category').setAttribute('disabled', 'true');
    document.getElementById('note').setAttribute('disabled', 'true');
    this.editable = false;
  }

  private getComponent() {
    this._cmpSer.GetComponent(this.id).subscribe(data => {
      this.cmpForm = this._formBuilder.group({
        'Id': new FormControl({value: data.json().Id, disabled: true}),
        'Name': new FormControl({value: data.json().Name, disabled: true}),
        'ManufacturerId': new FormControl({value: data.json().ManufacturerId, disabled: true}),
        'PartNumber': new FormControl({value: data.json().PartNumber, disabled: true}),
        'DistributorId': new FormControl({value: data.json().DistributorId, disabled: true}),
        'DistributorCode': new FormControl({value: data.json().DistributorCode, disabled: true}),
        'Price': new FormControl({value: data.json().Price, disabled: true}),
        'Code': new FormControl({value: data.json().Code, disabled: true}),
        'LocationId': new FormControl({value: data.json().LocationId, disabled: true}),
        'Datasheet': new FormControl({value: data.json().Datasheet, disabled: true}),
        'FootprintId': new FormControl({value: data.json().FootprintId, disabled: true}),
        'CategoryId': new FormControl({value: data.json().CategoryId, disabled: true}),
        'Note': new FormControl({value: data.json().Note, disabled: true})
      });
    });
  }

  private getCP() {
    this._cpsSer.GetComponentParams(this.id).subscribe(data => {
      let cps = data.json();
      for (let i = 0; i < cps.length; i++) {
        this.cpsForms[i] = this._formBuilder.group({
          'Id': new FormControl({value: cps[i].Id, disabled: true}),
          'ComponentId': new FormControl({value: cps[i].ComponentId, disabled: true}),
          'CPT': new FormControl({value: cps[i].CPT, disabled: true}),
          'Value': new FormControl({value: cps[i].Value, disabled: true}),
          'Prefix': new FormControl({value: cps[i].Prefix, disabled: true}),
          'Note': new FormControl({value: cps[i].Note, disabled: true})
        });
      }
    });
  }
}
