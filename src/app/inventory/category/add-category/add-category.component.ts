import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  constructor(
    private _catSer: CategoryService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(_formData: any) {
    let error = false;

    if (_formData.Name === "") {
      document.getElementById('name').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('name').className = "uk-input";

    if (!error)
      this._catSer.PostCategory(_formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => { this._router.navigate(['/inventory/categories']); }
      );
  }
}
