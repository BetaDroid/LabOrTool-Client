import { Component, OnInit } from '@angular/core';
import {CategoryParamTypeService} from "./category-param-type.service";
import {CategoryService} from "../category/category.service";
import {UnitService} from "../unit/unit.service";

@Component({
  selector: 'app-category-param-type',
  templateUrl: './category-param-type.component.html',
  styleUrls: ['./category-param-type.component.css']
})
export class CategoryParamTypeComponent implements OnInit {
  CPTs = [];

  constructor(private _cptSer: CategoryParamTypeService) { }

  ngOnInit() {
    this._cptSer.GetCatParamTypes().subscribe(data => { this.CPTs = data.json() });
  }

  deleteCPT(_id: number) {
    this._cptSer.DeleteCatParamType(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._cptSer.GetCatParamTypes().subscribe(data => { this.CPTs = data.json() }); }
    );
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._cptSer.SearchCatParamType((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.CPTs = data.json();
        }
      );
    else
      this._cptSer.GetCatParamTypes().subscribe(data => { this.CPTs = data.json() });
  }
}
