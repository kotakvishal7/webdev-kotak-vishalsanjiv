import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../../../services/user.service.client';
import { User} from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private  router: Router) { }
  username: String;
  password: String;
  ngOnInit() {
  }

  login(username: String, password: String) {
    const user: User = this.userService.findUserByCredentials(username, password);
    if (user) {
      this.router.navigate(['/user', user._id]);
    }
  }

}


