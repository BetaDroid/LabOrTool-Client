import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';
import { NoteTypeService } from '../note-type.service';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
  providers: [NoteService, NoteTypeService]
})
export class AddNoteComponent implements OnInit {
  Types = [];

  constructor(
    private _router: Router,
    private _noteSer: NoteService,
    private _noteTypeSer: NoteTypeService,
    private _loginSer: LoginService) { }

  ngOnInit() {
    this._noteTypeSer.GetNoteTypes().subscribe(data => { this.Types = data.json(); });
  }

  onSubmit(_formData: any) {
    let error = false; const user = this._loginSer.getUser();

    if (_formData.NoteType === '') {
      document.getElementById('type').className += ' uk-form-danger';
      error = true;
    } else
      document.getElementById('type').className = 'uk-input';

    if (_formData.ParentId === '') {
      document.getElementById('parent').className += ' uk-form-danger';
      error = true;
    } else
      document.getElementById('parent').className = 'uk-input';

    _formData.EmployeeCreationId = user.Id;
    _formData.EmployeeModificationId = user.Id;

    if (!error)
      this._noteSer.PostNote(_formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => { this._router.navigate(['/notes']); }
      );
  }
}
