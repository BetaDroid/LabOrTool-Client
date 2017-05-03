import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-view-distributor',
  templateUrl: './view-distributor.component.html',
  styleUrls: ['./view-distributor.component.css']
})
export class ViewDistributorComponent implements OnInit {
  disForm: FormGroup;
  private editable: boolean = false;

  constructor(private _formBuilder: FormBuilder) {
    // TODO: get call
    this.disForm = _formBuilder.group({
      'id': new FormControl({value: '1', disabled: true}),
      'name': new FormControl({value: '2', disabled: true}),
      'website': new FormControl({value: '3', disabled: true})
    });
  }

  ngOnInit() {

  }

  private onSubmit(_values: any) {
    // TODO: form validation
    console.log(_values);
    // TODO: put call
    this.DisableEdit();
  }

  private EnableEdit() {
    document.getElementById('name').removeAttribute('disabled');
    document.getElementById('website').removeAttribute('disabled');
    this.editable = true;
  }

  private DisableEdit() {
    document.getElementById('name').setAttribute('disabled', 'true');
    document.getElementById('website').setAttribute('disabled', 'true');
    this.editable = false;
  }

  // TODO: delete call

}
