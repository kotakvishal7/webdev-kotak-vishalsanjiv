import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Widget } from '../../../models/widget.model.client';
import { WidgetService } from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgets: Widget[];
  constructor(private route: ActivatedRoute,
              private widgetService: WidgetService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetService
        .findWidgetsByPageId(this.userId, this.websiteId, this.pageId)
        .subscribe((widgets) => {
          this.widgets = widgets;
        });
    });
  }

  reorderWidgets(index) {}

}
