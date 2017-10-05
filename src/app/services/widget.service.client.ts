import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {
  constructor() {
  }

  widgets = [
    {_id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'Lorem'},
    {_id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem'},
    {_id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%', url: 'http://lorempixel.com/400/200/'},
    {_id: '456', widgetType: 'HTML', pageId: '321', text: 'Lorem'},
    {_id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem'},
    {_id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%', text: 'https://youtube.com/AM2Ivdi9c4E'},
    {_id: '789', widgetType: 'HTML', pageId: '321', text: 'Lorem'}
  ]
  pageWidgets = [];
  api = {
    createWidget: this.createWidget,
    findWidgetsByPageId: this.findWidgetsByPageId,
    findWidgetById: this.findWidgetById,
    updateWidget: this.updateWidget,
    deleteWidget: this.deleteWidget
  };
  createWidget(pageId: string, widget: any) {
    widget._id = Math.random();
    this.widgets.push(widget);
    return widget;
  }
  findWidgetsByPageId(pageId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) { this.pageWidgets.push(this.widgets[x]); }
    }
    return this.pageWidgets;
  }
  findWidgetById(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) { return this.widgets[x]; }
    }
  }
  updateWidget(widgetId: string, widget: any) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) { this.widgets[x] = widget; }
    }
  }
  deleteWidget(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) { this.widgets.splice(x, 1); }
    }
  }
}
