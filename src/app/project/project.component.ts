import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  Projects = [];

  constructor(private _proSer: ProjectService) { }

  ngOnInit() {
    this._proSer.GetProjects().subscribe(data => { this.Projects = data.json(); });
  }

  deleteProject(_id: number) {
    this._proSer.DeleteProject(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._proSer.GetProjects().subscribe(data => { this.Projects = data.json(); }); }
    );
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._proSer.SearchProjects((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.Projects = data.json();
        }
      );
    else
      this._proSer.GetProjects().subscribe(data => { this.Projects = data.json(); });
  }
}
