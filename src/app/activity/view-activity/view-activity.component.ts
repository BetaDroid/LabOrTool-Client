import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from '../activity.service';
import { PriorityService } from '../priority.service';
import { TypeService } from '../type.service';
import { StatusService } from '../../services/status.service';
import { EmployeeService } from '../../user/employee/employee.service';

@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.component.html',
  styleUrls: ['./view-activity.component.css'],
  providers: [
    ActivityService,
    PriorityService,
    TypeService,
    EmployeeService,
    StatusService
  ]
})
export class ViewActivityComponent implements OnInit {
  actForm: FormGroup;
  private editable = false;
  routeId; Priorities = []; Statuses = []; Types = []; Employees = [];


  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _actSer: ActivityService,
    private _priSer: PriorityService,
    private _typSer: TypeService,
    private _empSer: EmployeeService,
    private _staSer: StatusService) {
    this.actForm = _formBuilder.group({
      'Id': new FormControl({value: '', disabled: true}),
      'Title': new FormControl({value: '', disabled: true}),
      'WorkCode': new FormControl({value: '', disabled: true}),
      'PriorityId': new FormControl({value: '', disabled: true}),
      'Deadline': new FormControl({value: '', disabled: true}),
      'StatusId': new FormControl({value: '', disabled: true}),
      'TypeId': new FormControl({value: '', disabled: true}),
      'EmployeeId': new FormControl({value: '', disabled: true}),
      'Description': new FormControl({value: '', disabled: true}),
      'Editable': new FormControl({value: '', disabled: true})
    });
    _route.params.subscribe(params => {
      this.routeId = +params['id'];
    });
  }

  ngOnInit() {
    this._priSer.GetPriorities().subscribe(data => { this.Priorities = data.json(); });
    this._typSer.GetTypes().subscribe(data => { this.Types = data.json(); });
    this._empSer.GetEmployeesShort().subscribe(data => { this.Employees = data.json(); });
    this._staSer.GetStatuses().subscribe(data => { this.Statuses = data.json(); });
    this.getActivity();
  }

  onSubmit(_formData: any) {
    let error = false;

    if (_formData.Title === '') {
      document.getElementById('title').className += ' uk-form-danger';
      error = true;
    } else {
      document.getElementById('title').className = 'uk-input';
    }

    if (_formData.WorkCode === '') {
      document.getElementById('workcode').className += ' uk-form-danger';
      error = true;
    } else {
      document.getElementById('workcode').className = 'uk-input';
    }

    if (_formData.PriorityId === '') {
      document.getElementById('priority').className += ' uk-form-danger';
      error = true;
    } else {
      document.getElementById('priority').className = 'uk-input';
    }

    if (_formData.Deadline === '') {
      document.getElementById('deadline').className += ' uk-form-danger';
      error = true;
    } else {
      document.getElementById('deadline').className = 'uk-input';
    }

    if (_formData.StatusId === '') {
      document.getElementById('status').className += ' uk-form-danger';
      error = true;
    } else {
      document.getElementById('status').className = 'uk-input';
    }

    if (_formData.TypeId === '') {
      document.getElementById('type').className += ' uk-form-danger';
      error = true;
    } else {
      document.getElementById('type').className = 'uk-input';
    }

    if (_formData.Editable === '') {
      document.getElementById('editable').className += ' uk-form-danger';
      error = true;
    } else {
      document.getElementById('editable').className = 'uk-input';
    }

    if (!error) {
      this._actSer.PutActivity(this.routeId, _formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => {
          this.DisableEdit();
          this.getActivity();
        }
      );
    }
  }

  deleteActivity(_id: number) {
    this._actSer.DeleteActivity(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._router.navigate(['/activities']); }
    );
  }

  EnableEdit(_editable: boolean) {
    if (_editable) {
      document.getElementById('title').removeAttribute('disabled');
      document.getElementById('workcode').removeAttribute('disabled');
      document.getElementById('priority').removeAttribute('disabled');
      document.getElementById('deadline').removeAttribute('disabled');
      document.getElementById('status').removeAttribute('disabled');
      document.getElementById('type').removeAttribute('disabled');
      document.getElementById('employee').removeAttribute('disabled');
      document.getElementById('description').removeAttribute('disabled');
      document.getElementById('editable').removeAttribute('disabled');
      this.editable = true;
    } else {
      // TODO: send a notification message, the author doesn't allow modification.
    }
  }

  DisableEdit() {
    document.getElementById('title').setAttribute('disabled', 'true');
    document.getElementById('workcode').setAttribute('disabled', 'true');
    document.getElementById('priority').setAttribute('disabled', 'true');
    document.getElementById('deadline').setAttribute('disabled', 'true');
    document.getElementById('status').setAttribute('disabled', 'true');
    document.getElementById('type').setAttribute('disabled', 'true');
    document.getElementById('employee').setAttribute('disabled', 'true');
    document.getElementById('description').setAttribute('disabled', 'true');
    document.getElementById('editable').setAttribute('disabled', 'true');
    this.editable = false;
  }

  private getActivity() {
    this._actSer.GetActivity(this.routeId).subscribe(data => {
      const activity = data.json();
      this.actForm = this._formBuilder.group({
        'Id': new FormControl({value: activity.Id, disabled: true}),
        'Title': new FormControl({value: activity.Title, disabled: true}),
        'WorkCode': new FormControl({value: activity.WorkCode, disabled: true}),
        'PriorityId': new FormControl({value: activity.PriorityId, disabled: true}),
        'Deadline': new FormControl({value: activity.Deadline, disabled: true}),
        'StatusId': new FormControl({value: activity.StatusId, disabled: true}),
        'TypeId': new FormControl({value: activity.TypeId, disabled: true}),
        'EmployeeId': new FormControl({value: activity.EmployeeId, disabled: true}),
        'Description': new FormControl({value: activity.Description, disabled: true}),
        'Editable': new FormControl({value: activity.Editable, disabled: true})
      });
    });
  }
}
