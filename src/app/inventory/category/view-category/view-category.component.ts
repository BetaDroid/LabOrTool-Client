import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  catForm: FormGroup;
  private editable: boolean = false;
  id;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _catSer: CategoryService
  ) {
    this.catForm = _formBuilder.group({
      'Id': new FormControl({value: '', disabled: true}),
      'Name': new FormControl({value: '', disabled: true}),
      'Note': new FormControl({value: '', disabled: true})
    });
    _route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnInit() {
    this.getCategory();
  }

  onSubmit(_formData: any) {
    let error = false;

    if (_formData.Name === "") {
      document.getElementById('name').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('name').className = "uk-input";

    if (!error) {
      this._catSer.PutCategory(this.id, _formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => {
          this.DisableEdit();
          this.getCategory();
        }
      );
    }
  }

  deleteCategory(_id: number) {
    this._catSer.DeleteCategory(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._router.navigate(['/inventory/categories']); }
    );
  }

  EnableEdit() {
    document.getElementById('name').removeAttribute('disabled');
    document.getElementById('note').removeAttribute('disabled');
    this.editable = true;
  }

  DisableEdit() {
    document.getElementById('name').setAttribute('disabled', 'true');
    document.getElementById('note').setAttribute('disabled', 'true');
    this.editable = false;
  }

  private getCategory() {
    this._catSer.GetCategory(this.id).subscribe(data => {
      this.catForm = this._formBuilder.group({
        'Id': new FormControl({value: data.json().Id, disabled: true}),
        'Name': new FormControl({value: data.json().Name, disabled: true}),
        'Note': new FormControl({value: data.json().Note, disabled: true})
      });
    });
  }
}
