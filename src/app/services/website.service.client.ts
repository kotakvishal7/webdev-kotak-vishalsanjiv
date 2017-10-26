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
  baseUrl = environment.baseUrl;

  createWebsite(userId: String, website: Website) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website)
      .map((response: Response) => {
        return response.json();
    });
  }

  findWebsitesByUser(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
    });
  }


  findWebsiteById(userId, websiteId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWebsite(userId: String, website: Website) {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + website._id;
    return this.http.put(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWebsite(userId: String, websiteId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
