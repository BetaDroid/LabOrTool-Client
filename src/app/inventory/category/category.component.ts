import { Component, OnInit } from '@angular/core';
import {CategoryService} from "./category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  Categories = [];

  constructor(private _catSer: CategoryService) { }

  ngOnInit() {
    this._catSer.GetCategories().subscribe(data => { this.Categories = data.json() });
  }

  deleteCategory(_id: number) {
    this._catSer.DeleteCategory(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._catSer.GetCategories().subscribe(data => { this.Categories = data.json() }); }
    );
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._catSer.SearchCategory((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.Categories = data.json();
        }
      );
    else
      this._catSer.GetCategories().subscribe(data => { this.Categories = data.json() });
  }
}
