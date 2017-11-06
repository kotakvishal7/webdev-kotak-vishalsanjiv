import { Component, OnInit } from '@angular/core';
import { User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = User;
  showError: Boolean;
  username: String;
  password: String;
  verifyPassword: String;
  constructor(private userService: UserService, private  router: Router) { }

  ngOnInit() {
    this.showError = false;
  }

  createUser(username: String, password: String, verifyPassword: String) {
    this.username = username;
    this.password = password;
    this.verifyPassword = verifyPassword;
    if (!username || !password || !verifyPassword) {
       this.showError = true;
       return;
    }
    if (password === verifyPassword) {
        const tempUser = new User('', username, password);
        this.userService
          .findUserByUsername(username)
          .subscribe((user) => {
          if  (user === null) {
            this.userService
              .createUser(tempUser)
              .subscribe((newUser) => {
                this.user = newUser;
              });
          }else {
            this.showError = true;
            return;
          }
          this.router.navigate(['/login']);
        });
    }
  }

}
