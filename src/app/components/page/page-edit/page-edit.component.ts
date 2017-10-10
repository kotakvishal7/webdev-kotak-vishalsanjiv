import { Component, OnInit } from '@angular/core';
import { Page } from '../../../models/page.model.client';
import { ActivatedRoute } from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  pages: Page[];
  page: Page;
  constructor(private pageService: PageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.pages = this.pageService.findPagebyWebsiteId(this.websiteId);
      this.page = this.pageService.findPageById(this.pageId);
    });
  }

}
