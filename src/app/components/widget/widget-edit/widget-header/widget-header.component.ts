import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;
  editFlag: Boolean;
  constructor(private route: ActivatedRoute,
              private widgetService: WidgetService,
              private  router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widget = new Widget('0', 'HEADING', this.pageId);
      this.widget.text = '';
      this.widget.size = '';
      this.editFlag = false;
      if (this.widgetId) {
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        this.editFlag = true;
      }
    });
  }
  createWidget(text: String, size: String) {
      let widget = new Widget('', '', this.pageId);
      widget.text = text;
      widget.size = size;
      widget.type = 'HEADING';
      widget = this.widgetService.createWidget(this.pageId, widget);
  }
  deleteWidget(widgetId: String) {
    this.widgetService.deleteWidget(widgetId);
  }
  updateWidget(text: String, size: String, widgetId: String) {
    const widget = new Widget(widgetId, 'HEADING', this.pageId);
    widget.text = text;
    widget.size = size;
    this.widgetService.updateWidget(widgetId, widget);
  }
}
