import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import { Page } from '../models/page.model.client';

// injecting service into module
@Injectable()

export class PageService {
  constructor(private http: Http) {}
  createPage(userId: String, websiteId: String, page: Page) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId + '/page';
    return this.http.post(url, page)
      .map((response: Response) => {
        return response.json();
      });
  }
  findPagebyWebsiteId(userId: String, websiteId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId + '/page';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  findPageById(userId: String, websiteId: String, pageId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  updatePage(userId: String, websiteId: String, page: Page) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId + '/page/' + page._id;
    return this.http.put(url, page)
      .map((response: Response) => {
        return response.json();
      });
  }
  deletePage(userId: String, websiteId: String, pageId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
