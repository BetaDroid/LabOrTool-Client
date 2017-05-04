import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { User } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(private _loginSer: LoginService, private _router: Router) {
  }

  ngOnInit() {
    //this._loginSer.login('admin', 'admin').subscribe(data => {this.model = data.json()});
    //console.log(this.model);
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
      console.log(_formData);
    }
  }
}
