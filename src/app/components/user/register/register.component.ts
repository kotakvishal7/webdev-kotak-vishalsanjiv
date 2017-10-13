import { Component, OnInit } from '@angular/core';
import { User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = User;
  constructor(private userService: UserService, private  router: Router) { }

  ngOnInit() {
  }

  createUser(username: String, password: String, verifyPassword: String) {
    if (password === verifyPassword) {
      const user = new User('0', username, password);
      this.userService.createUser(user);
      if (user) {
        this.router.navigate(['/login']);
      }
    }
  }

}
