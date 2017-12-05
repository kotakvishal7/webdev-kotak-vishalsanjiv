import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UserService} from '../../../services/user.service.client';
import { User} from '../../../models/user.model.client';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: String;
  user: {};
  username: String;
  emailId: String;
  firstName: String;
  lastName: String;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>  {
      this.user = this.sharedService.user || this.user;
      // console.log('Profile Page');
      // console.log(this.user);
      this.userId = this.user['_id'];
      this.username = this.user['username'];
      this.emailId = this.user['emailId'];
      this.firstName = this.user['firstName'];
      this.lastName = this.user['lastName'];
    });
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  updateUser(userName: String, emailId: String, firstName: String, lastName: String) {
    const tempUser = new User(this.userId, userName, this.user['password']);
    tempUser.emailId = emailId;
    tempUser.firstName = firstName;
    tempUser.lastName = lastName;
    this.userService
      .updateUser(this.userId, tempUser)
      .subscribe((user) => {
        this.user = user;
        this.router.navigate(['/profile']);
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
