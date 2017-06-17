import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [NoteService]
})
export class NoteComponent implements OnInit {
  Notes = [];

  constructor(private _notSer: NoteService) { }

  ngOnInit() {
    this._notSer.GetNotes().subscribe(data => { this.Notes = data.json(); });
  }

  deleteNote(_id: number) {
    this._notSer.DeleteNote(_id).subscribe(
      () => {}, // TODO: check the response
      () => {},
      () => { this._notSer.GetNotes().subscribe(data => { this.Notes = data.json(); }); }
    );
  }

  onKey(event: KeyboardEvent) {
    if ((<HTMLInputElement>event.target).value !== '')
      this._notSer.SearchNotes((<HTMLInputElement>event.target).value).subscribe(
        data => {
          this.Notes = data.json();
        }
      );
    else
      this._notSer.GetNotes().subscribe(data => { this.Notes = data.json(); });
  }
}
