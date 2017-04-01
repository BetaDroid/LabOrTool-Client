import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Login: LoginService) { }

  ngOnInit() {
  }

  onSubmit(_Form: any): void {
    this._Login.make_login(_Form.Username, _Form.Password);
  }
}
