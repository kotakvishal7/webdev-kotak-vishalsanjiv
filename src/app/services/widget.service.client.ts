import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Widget} from '../models/widget.model.client';

// injecting service into module
@Injectable()

export class WidgetService {
  constructor() {
  }
  widgets: Widget[] =  [
    {_id: '123', type: 'HEADING', pageId: '321', size: '2', text: 'Lorem', url: '', width: '', name: ''},
    {_id: '234', type: 'HEADING', pageId: '321', size: '4', text: 'Lorem', url: '', width: '', name: ''},
    {_id: '345', type: 'IMAGE', pageId: '321', width: '100%', url: 'http://lorempixel.com/400/200/', size: ''
      , text: '', name: 'Test Image'},
    {_id: '456', type: 'HTML', pageId: '321', text: 'Lorem', url: '', width: '', size: '', name: ''},
    {_id: '567', type: 'HEADING', pageId: '789', size: '4', text: 'Lorem', url: '', width: '', name: ''},
    {_id: '678', type: 'YOUTUBE', pageId: '789', width: '100%', text: 'Introduction to HTML',
      url: 'https://www.youtube.com/embed/ekIRCLFFvBI' , size: '', name: 'Web Development'},
    {_id: '789', type: 'IMAGE', pageId: '789', text: 'Lorem', url: 'http://lorempixel.com/400/200/'
      , size: '', width: '500', name: 'Test Image'}
  ]

  api = {
    createWidget: this.createWidget,
    findWidgetsByPageId: this.findWidgetsByPageId,
    findWidgetById: this.findWidgetById,
    updateWidget: this.updateWidget,
    deleteWidget: this.deleteWidget
  };
  createWidget(pageId: String, widget: Widget) {
    console.log(this.widgets);
    widget._id = '' + Math.floor(Math.random() * 20);
    widget.pageId = pageId;
    console.log(widget);
    this.widgets.push(widget);
    console.log(this.widgets);
    return widget;
  }
  findWidgetsByPageId(pageId: String) {
    const pageWidgets: Widget[] = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        pageWidgets.push(this.widgets[x]);
      }
    }
    return pageWidgets;
  }
  findWidgetById(widgetId: String) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }
  updateWidget(widgetId: String, widget: any) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) { this.widgets[x] = widget; }
    }
  }
  deleteWidget(widgetId: String) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) { this.widgets.splice(x, 1); }
    }
  }
}
