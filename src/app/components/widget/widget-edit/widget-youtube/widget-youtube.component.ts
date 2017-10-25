import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

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
  showError: Boolean;
  widgetText: String;
  widgetName: String;
  widgetWidth: String;
  widgetUrl: String;
  widgets: Widget[];
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
      this.widgetService
        .findWidgetById(this.userId, this.websiteId, this.pageId, this.widgetId)
        .subscribe((widget) => {
          this.widget = widget;
          this.widgetText = widget.text;
          this.widgetName = widget.name;
          this.widgetWidth = widget.width;
          this.widgetUrl = widget.url;
          this.editFlag = true;
        });
    });
  }

  createWidget(text: String, name: String, width: String, url: String) {
    if (!text || !name || !width || !url ) {
      this.showError = true;
      return;
    }
    const widget = new Widget('', 'YOUTUBE', this.pageId);
    widget.text = text;
    widget.name = name;
    widget.width = width;
    widget.url = url;
    this.widgetService
      .createWidget(this.userId, this.websiteId, this.pageId, widget)
      .subscribe((widgets) => {
        this.widgets = widgets;
        this.router.navigate(['/user', this.userId, 'website',
          this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
  deleteWidget(widgetId: String) {
    this.widgetService
      .deleteWidget(this.userId, this.websiteId, this.pageId, widgetId)
      .subscribe((widgets) => {
        this.widgets = widgets;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
  updateWidget(text: String, name: String, width: String, url: String, widgetId: String) {
    const widget = new Widget(widgetId, 'YOUTUBE', this.pageId);
    widget.text = text;
    widget.name = name;
    widget.width = width;
    widget.url = url;
    this.widgetService
      .updateWidget(this.userId, this.websiteId, this.pageId, widgetId, widget)
      .subscribe((widgets) => {
        this.widgets = widgets;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
