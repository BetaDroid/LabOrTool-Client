import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {User} from "./user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private _userSer: UserService) { }

  ngOnInit() {
    this._userSer.getUsers()
      .subscribe(users => {
        this.users = users;
      });
    console.log(this.users);
  }

}
