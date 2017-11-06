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
  baseUrl = environment.baseUrl;

  users: User[] = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', emailId: 'alice@gmail.com'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', emailId: 'bob@gmail.com'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', emailId: 'charly@gmail.com'},
    {_id: '456', username: 'kotakv', password: 'kotak', firstName: 'Vishal', lastName: 'Kotak', emailId: 'kotakv@gmail.com'}
  ];
   createUser(user: User) {
    const url = this.baseUrl + '/api/user/';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username: String) {
    const url = this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  findUserByCredentials(username: String, password: String) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        });
  }
  updateUser(userId: String, user: User) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }
  deleteUser(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
