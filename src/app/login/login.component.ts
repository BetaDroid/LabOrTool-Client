import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from "@angular/router";
import { UnauthorizedError } from '../error/error.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private Unauthorized: UnauthorizedError = {
    Error: "Unauthorized", Message: "Please authenticate", Status: "401"
  };
  protected data;

  constructor(private _loginSer: LoginService, private _router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(_form: any): void {
    this._loginSer.GetAuthToken(_form.Username, _form.Password).subscribe((res: Response) => {
      if (this._loginSer.MakeLogin(res.json())) {
        this._router.navigate(['/dashboard']);
      }
    });
  }
}
