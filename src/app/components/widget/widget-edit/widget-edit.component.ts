import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;
  widgetType: String;
  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private widgetService: WidgetService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widgetService
        .findWidgetById(this.userId, this.websiteId, this.pageId, this.widgetId)
        .subscribe((widget) => {
          this.widget = widget;
          this.widgetType = widget.type;
        });
    });
  }

}
