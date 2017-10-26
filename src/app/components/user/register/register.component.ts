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
  constructor(private userService: UserService, private  router: Router) { }

  ngOnInit() {
    this.showError = false;
  }

  createUser(username: String, password: String, verifyPassword: String) {
    if (!username || !password || !verifyPassword) {
       this.showError = true;
       return;
    }
    if (password === verifyPassword) {
        const tempUser = new User('', username, password);
        this.userService
          .createUser(tempUser)
          .subscribe((user) => {
            this.user = user;
            this.router.navigate(['/login']);
          });
    }
  }

}
