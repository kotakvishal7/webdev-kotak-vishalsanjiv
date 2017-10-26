import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Widget} from '../models/widget.model.client';

// injecting service into module
@Injectable()

export class WidgetService {
  constructor(private http: Http) {
  }
  baseUrl = environment.baseUrl;
  createWidget(userId: String, websiteId: String, pageId: String, widget: Widget) {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget';
    return this.http.post(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }
  findWidgetsByPageId(userId: String, websiteId: String, pageId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  findWidgetById(userId: String, websiteId: String, pageId: String, widgetId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/website/'
      + websiteId + '/page/' + pageId + '/widget/' + widgetId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  updateWidget(userId: String, websiteId: String, pageId: String, widgetId: String, widget: Widget) {
    const url = this.baseUrl + '/api/user/' + userId + '/website/'
      + websiteId + '/page/' + pageId + '/widget/' + widgetId;
    return this.http.put(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }
  deleteWidget(userId: String, websiteId: String, pageId: String, widgetId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/website/'
      + websiteId + '/page/' + pageId + '/widget/' + widgetId ;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
