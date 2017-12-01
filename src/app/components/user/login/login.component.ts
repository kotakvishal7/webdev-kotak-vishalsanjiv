import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { NgForm } from '@angular/forms';
import {SharedService } from '../../../services/shared.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('form') loginForm: NgForm;

  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Please enter valid username and password';
  ngOnInit() {
    this.errorFlag = false;
  }

  constructor(private userService: UserService,
              private  router: Router,
              private sharedService: SharedService) { }
  // Form Metod
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService
      .login(this.username, this.password)
      .subscribe(
        (user) => {
            if (user) {
              this.sharedService.user = user;
              this.router.navigate(['/profile']);
            }},
          (error: any) => {
            this.errorFlag = true;
          });
  }
}



