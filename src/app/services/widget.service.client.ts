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
  widgets: Widget[] =  [
    {_id: '123', type: 'HEADING', pageId: '123', size: '2', text: 'Lorem', url: '', width: '', name: ''},
    {_id: '234', type: 'HEADING', pageId: '123', size: '4', text: 'Lorem', url: '', width: '', name: ''},
    {_id: '345', type: 'IMAGE', pageId: '321', width: '200', url: 'http://lorempixel.com/400/200/', size: ''
      , text: '', name: 'Test Image'},
    {_id: '456', type: 'HTML', pageId: '321', text: 'Lorem', url: '', width: '', size: '', name: ''},
    {_id: '567', type: 'HEADING', pageId: '789', size: '4', text: 'Lorem', url: '', width: '', name: ''},
    {_id: '678', type: 'YOUTUBE', pageId: '789', width: '100%', text: 'Introduction to HTML',
      url: 'https://www.youtube.com/embed/ekIRCLFFvBI' , size: '', name: 'Web Development'},
    {_id: '789', type: 'IMAGE', pageId: '789', text: 'Lorem', url: 'http://lorempixel.com/400/200/'
      , size: '', width: '200', name: 'Test Image'}
  ]

  createWidget(userId: String, websiteId: String, pageId: String, widget: Widget) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget';
    return this.http.post(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }
  findWidgetsByPageId(userId: String, websiteId: String, pageId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  findWidgetById(userId: String, websiteId: String, pageId: String, widgetId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/'
      + websiteId + '/page/' + pageId + '/widget/' + widgetId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  updateWidget(userId: String, websiteId: String, pageId: String, widgetId: String, widget: Widget) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/'
      + websiteId + '/page/' + pageId + '/widget/' + widgetId;
    return this.http.put(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }
  deleteWidget(userId: String, websiteId: String, pageId: String, widgetId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/'
      + websiteId + '/page/' + pageId + '/widget/' + widgetId ;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
