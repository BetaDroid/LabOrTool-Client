import { Component, OnInit } from '@angular/core';
import {ComponentService} from './component.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  Components = [];

  constructor(private _comSer: ComponentService) { }

  ngOnInit() {
    this._comSer.GetComponents().subscribe(data => { this.Components = data.json(); });
  }

  deleteComponent(_id: number) {
    this._comSer.DeleteComponent(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._comSer.GetComponents().subscribe(data => { this.Components = data.json(); }); }
    );
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._comSer.SearchComponent((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.Components = data.json();
        }
      );
    else
      this._comSer.GetComponents().subscribe(data => { this.Components = data.json(); });
  }
}
