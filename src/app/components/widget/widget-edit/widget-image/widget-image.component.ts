import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {environment} from '../../../../../environments/environment';


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
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
              private router: Router) { }
  baseUrl = environment.baseUrl;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.editFlag = false;
      this.showError = false;
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
    const widget = new Widget('', 'IMAGE', this.pageId);
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
  updateWidget(text: String, name: String, width: String, url: String, widgetId: String) {
    const widget = new Widget(widgetId, 'IMAGE', this.pageId);
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
  deleteWidget(widgetId: String) {
    this.widgetService
      .deleteWidget(this.userId, this.websiteId, this.pageId, widgetId)
      .subscribe((widgets) => {
        this.widgets = widgets;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

}
