import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  constructor(
    private _proSer: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(_formData: any) {
    let error = false;

    if (_formData.Name === '') {
      document.getElementById('name').className += ' uk-form-danger';
      error = true;
    } else
      document.getElementById('name').className = 'uk-input';

    if (!error)
      this._proSer.PostProject(_formData).subscribe(
        () => {  }, // TODO: check if the response is true
        () => {},
        () => { this._router.navigate(['/projects']); }
      );
  }
}
