import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from "../../../../services/widget.service.client";
import {Widget} from "../../../../models/widget.model.client";

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
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
      this.editFlag = false;
      this.widget = new Widget('', '', this.pageId);
      if (this.widgetId) {
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        this.editFlag = true;
      }
    });
  }

  createWidget(text: String, name: String, width: String, url: String) {
    let widget = new Widget('', '', this.pageId);
    widget.text = text;
    widget.name = name;
    widget.width = width;
    widget.url = url;
    widget.type = 'YOUTUBE';
    widget = this.widgetService.createWidget(this.pageId, widget);
  }
  deleteWidget(widgetId: String) {
    this.widgetService.deleteWidget(widgetId);
  }
  updateWidget(text: String, width: String, name: String, widgetId: String, url: String) {
    const widget = new Widget(widgetId, 'YOUTUBE', this.pageId);
    widget.text = text;
    widget.name = name;
    widget.width = width;
    widget.url = url;
    this.widgetService.updateWidget(widgetId, widget);
  }
}
