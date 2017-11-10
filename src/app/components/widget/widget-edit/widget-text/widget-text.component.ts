import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;
  editFlag: Boolean;
  showError: Boolean;
  widgetFormatted: Boolean = false;
  widgetName: String;
  widgetRows: Number;
  widgetText: String;
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
          this.widgetFormatted = this.widget.formatted;
          this.widgetName = this.widget.name;
          this.widgetRows = this.widget.rows;
          this.widgetText = this.widget.text;
          this.editFlag = true;
        });
    });
  }

  createWidget(widgetFormatted: Boolean, widgetName: String, widgetRows: Number, widgetText: String) {
    if (!widgetName || !widgetRows) {
      this.showError = true;
      return;
    }
    const widget = new Widget('', 'TEXT', this.pageId);
    widget.formatted = widgetFormatted;
    widget.name = widgetName;
    widget.rows = widgetRows;
    widget.text = widgetText;
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
        this.router.navigate(['/user', this.userId, 'website',
          this.websiteId, 'page', this.pageId, 'widget']);
      });
  }


  updateWidget(widgetFormatted: Boolean, widgetName: String,
               widgetRows: Number, widgetText: String, widgetId: String) {
    const widget = new Widget(widgetId, 'TEXT', this.pageId);
    widget.formatted = widgetFormatted;
    widget.name = widgetName;
    widget.rows = widgetRows;
    widget.text = widgetText;
    this.widgetService
      .updateWidget(this.userId, this.websiteId, this.pageId, widgetId, widget)
      .subscribe((widgets) => {
        this.widgets = widgets;
        this.router.navigate(['/user', this.userId, 'website',
          this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
