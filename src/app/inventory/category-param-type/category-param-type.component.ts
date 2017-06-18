import { Component, OnInit } from '@angular/core';
import {CategoryParamTypeService} from './category-param-type.service';

@Component({
  selector: 'app-category-param-type',
  templateUrl: './category-param-type.component.html',
  styleUrls: ['./category-param-type.component.css']
})
export class CategoryParamTypeComponent implements OnInit {
  CPTs = [];

  constructor(private _cptSer: CategoryParamTypeService) { }

  ngOnInit() {
    this._cptSer.GetCPTs().subscribe(data => { this.CPTs = data.json(); });
  }

  deleteCPT(_id: number) {
    this._cptSer.DeleteCPT(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._cptSer.GetCPTs().subscribe(data => { this.CPTs = data.json(); }); }
    );
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._cptSer.SearchCPTs((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.CPTs = data.json();
        }
      );
    else
      this._cptSer.GetCPTs().subscribe(data => { this.CPTs = data.json(); });
  }
}
