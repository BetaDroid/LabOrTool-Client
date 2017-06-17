import { Component, OnInit } from '@angular/core';
import { ActivityService } from './activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  Activities = [];

  constructor(private _actSer: ActivityService) { }

  ngOnInit() {
    this._actSer.GetActivities().subscribe(data => { this.Activities = data.json(); });
  }

  deleteActivity(_id: number) {
    this._actSer.DeleteActivity(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._actSer.GetActivities().subscribe(data => { this.Activities = data.json(); }); }
    );
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._actSer.SearchActivities((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.Activities = data.json();
        }
      );
    else
      this._actSer.GetActivities().subscribe(data => { this.Activities = data.json(); });
  }
}
