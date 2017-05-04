import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginSer: LoginService, private _router: Router) {
  }

  ngOnInit() {
  }

  private onSubmit(_formData: any) {
    let error = false;

    if (_formData.username === "") {
      document.getElementById('username').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('username').className = "uk-input";

    if (_formData.password === "") {
      document.getElementById('password').className += " uk-form-danger";
      error = true;
    } else
      document.getElementById('password').className = "uk-input";

    if (!error) {
      if (this._loginSer.makeLogin(_formData.username, _formData.password))
        this._router.navigate(['/dashboard']);
      else {
        console.log('error');
        // TODO: error message
      }
    }
  }
}
