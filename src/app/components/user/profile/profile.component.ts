import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UserService} from '../../../services/user.service.client';
import { User} from '../../../models/user.model.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: String;
  user: User;
  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>  {
      this.userId = params['uid'];
      this.userService.findUserById(this.userId)
        .subscribe((user: User) => {
          this.user = user;
      });
    });
  }

  updateUser(userName: String, emailId: String, firstName: String, lastName: String) {
    const user = new User(this.userId, userName, this.user.password);
    user.emailId = emailId;
    user.firstName = firstName;
    user.lastName = lastName;
    this.userService.updateUser(this.userId, user);
  }


}
