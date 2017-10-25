import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import { Website } from '../models/website.model.client';

// injecting service into module
@Injectable()

export class WebsiteService {
  constructor(private http: Http) {}
  websites: Website[] =  [
    {_id: '123', name: 'Facebook', developerId: '456', description: 'Lorem'},
    {_id: '234', name: 'Twitter', developerId: '456', description: 'Lorem'},
    {_id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem'},
    {_id: '890', name: 'Go', developerId: '123', description: 'Lorem'},
    {_id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem'},
    {_id: '678', name: 'Checkers', developerId: '123', description: 'Lorem'},
    {_id: '789', name: 'Chess', developerId: '234', description: 'Lorem'}

  ];

  api = {
    createWebsite: this.createWebsite,
    findWebsiteByUser: this.findWebsitesByUser,
    findWebsiteById: this.findWebsiteById,
    updateWebsite: this.updateWebsite,
    deleteWebsite: this.deleteWebsite
  }
  createWebsite(userId: String, website: Website) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.post(url, website)
      .map((response: Response) => {
        return response.json();
    });
  }

  findWebsitesByUser(userId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
    });
  }


  findWebsiteById(userId, websiteId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWebsite(userId: String, website: Website) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + website._id;
    alert(website._id);
    return this.http.put(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWebsite(userId: String, websiteId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
