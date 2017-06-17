import { Component, OnInit } from '@angular/core';
import {PriorityService} from '../priority.service';
import {TypeService} from '../type.service';
import {StatusService} from '../../services/status.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css'],
  providers: [PriorityService, TypeService, StatusService]
})
export class AddActivityComponent implements OnInit {
  Priorities =  []; Types = []; Statuses = [];

  constructor(private _priSer: PriorityService,
              private _typSer: TypeService,
              private _staSer: StatusService) { }

  ngOnInit() {
    this._priSer.GetPriorities().subscribe(data => { this.Priorities = data.json(); }, () => {}, () => { console.log(this.Priorities); });
    this._typSer.GetTypes().subscribe(data => { this.Types = data.json(); });
    this._staSer.GetStatuses().subscribe(data => { this.Statuses = data.json(); });
  }

}
