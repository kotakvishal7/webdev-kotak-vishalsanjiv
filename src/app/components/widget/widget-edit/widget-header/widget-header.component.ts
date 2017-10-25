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
  showError: Boolean;
  widgetText: String;
  widgetSize: String;
  widgets: Widget[];
  constructor(private route: ActivatedRoute,
              private widgetService: WidgetService,
              private router: Router) { }

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
          this.widgetSize = widget.size;
          this.widgetText = widget.text;
          this.editFlag = true;
        });
    });
  }
  createWidget(text: String, size: String) {
      if (!text || !size) {
        this.showError = true;
        return;
      }
      const widget = new Widget('', 'HEADING', this.pageId);
      widget.text = text;
      widget.size = size;
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


  updateWidget(text: String, size: String, widgetId: String) {
    const widget = new Widget(widgetId, 'HEADING', this.pageId);
    widget.text = text;
    widget.size = size;
    this.widgetService
      .updateWidget(this.userId, this.websiteId, this.pageId, widgetId, widget)
      .subscribe((widgets) => {
        this.widgets = widgets;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
