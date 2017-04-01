import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Login: LoginService, private _Router: Router) { }

  ngOnInit() {
  }

  onSubmit(_Form: any): void {
    this._Login.make_login(_Form.Username, _Form.Password);
    if (this._Login.check_login())
      this._Router.navigate(['/dashboard']);
    else
      console.log('login non riuscito');
  }
}
