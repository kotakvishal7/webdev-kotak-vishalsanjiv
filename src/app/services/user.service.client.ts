import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import { User } from '../models/user.model.client';

// injecting service into module
@Injectable()

export class UserService {
  constructor(private http: Http) {}
  users: User[] = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', emailId: 'alice@gmail.com'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', emailId: 'bob@gmail.com'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', emailId: 'charly@gmail.com'},
    {_id: '456', username: 'kotakv', password: 'kotak', firstName: 'Vishal', lastName: 'Kotak', emailId: 'kotakv@gmail.com'}
  ];
  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };
  createUser(user: User) {
    user._id = '' + Math.floor(Math.random() * 20);
    this.users.push(user);
    return user;
  }

  findUserById(userId: String) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) { return this.users[x]; }
    }
  }
  findUserByCredentials(username: String, password: String) {
    const url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        });
  }
  updateUser(userId: String, user: any) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x] = user;
      }
    }
  }
  deleteUser(userId: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) { this.users.splice(x, 1); }
    }
  }
}
