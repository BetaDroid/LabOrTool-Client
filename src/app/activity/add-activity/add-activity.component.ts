import { Component, OnInit } from '@angular/core';
import { PriorityService } from '../priority.service';
import { TypeService } from '../type.service';
import { StatusService } from '../../services/status.service';
import { ActivityService } from '../activity.service';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css'],
  providers: [
    PriorityService,
    TypeService,
    StatusService,
    ActivityService
  ]
})
export class AddActivityComponent implements OnInit {
  Priorities =  []; Types = []; Statuses = [];

  constructor(private _priSer: PriorityService,
              private _typSer: TypeService,
              private _staSer: StatusService,
              private _actSer: ActivityService,
              private _logSer: LoginService,
              private _router: Router) { }

  ngOnInit() {
    this._priSer.GetPriorities().subscribe(data => { this.Priorities = data.json(); });
    this._typSer.GetTypes().subscribe(data => { this.Types = data.json(); });
    this._staSer.GetStatuses().subscribe(data => { this.Statuses = data.json(); });
  }

  onSubmit(_formData: any) {
    let error = false; const user = this._logSer.getUser();

    if (user.EmployeeId === '') {
      // TODO: show a notification error message
      error = true;
    } else {
      _formData.EmployeeId = user.EmployeeId;
    }

    if (_formData.Title === '') {
      document.getElementById('title').className += ' uk-form-danger';
      error = true;
    } else {
      document.getElementById('title').className = 'uk-input';
    }

    if (_formData.TypeId === '') {
      document.getElementById('type').className += ' uk-form-danger';
      error = true;
    } else {
      document.getElementById('type').className = 'uk-input';
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

    if (!error) {
      this._actSer.PostActivity(_formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => { this._router.navigate(['/activities']); }
      );
    }
  }
}
