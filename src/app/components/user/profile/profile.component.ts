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
  username: String;
  emailId: String;
  firstName: String;
  lastName: String;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>  {
      this.userId = params['uid'];
      this.userService.findUserById(this.userId)
        .subscribe((user: User) => {
          this.user = user;
          this.username = user.username;
          this.emailId = user.emailId;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
      });
    });
  }

  updateUser(userName: String, emailId: String, firstName: String, lastName: String) {
    const tempUser = new User(this.userId, userName, this.user.password);
    tempUser.emailId = emailId;
    tempUser.firstName = firstName;
    tempUser.lastName = lastName;
    this.userService
      .updateUser(this.userId, tempUser)
      .subscribe((user) => {
        this.user = user;

      });
  }
  deleteUser(userId: String) {
    this.userService
      .deleteUser(this.userId)
      .subscribe((user) => {
        this.router.navigate(['/login']);
      });
  }
}
