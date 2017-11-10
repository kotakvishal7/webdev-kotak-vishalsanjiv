import { Component, OnInit } from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;
  editFlag: Boolean;
  showError: Boolean;
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
      this.showError = false;
      this.editFlag = false;
      this.widgetService
        .findWidgetById(this.userId, this.websiteId, this.pageId, this.widgetId)
        .subscribe((widget) => {
          this.widget = widget;
          this.editFlag = true;
        });
    });
  }

  createWidget(text: String) {
    if (!text) {
      this.showError = true;
      return;
    }
    const widget = new Widget('', 'HTML', this.pageId);
    widget.text = text;
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
  updateWidget(text: String, widgetId: String) {
    const widget = new Widget(widgetId, 'HTML', this.pageId);
    widget.text = text;
    this.widgetService
      .updateWidget(this.userId, this.websiteId, this.pageId, widgetId, widget)
      .subscribe((widgets) => {
        this.widgets = widgets;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
