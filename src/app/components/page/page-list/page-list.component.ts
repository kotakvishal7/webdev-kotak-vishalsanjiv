import { Component, OnInit } from '@angular/core';
import { Page } from '../../../models/page.model.client';
import { ActivatedRoute } from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  userId: String;
  websiteId: String;
  pages: Page[];
  constructor(private pageService: PageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageService
        .findPagebyWebsiteId(this.userId, this.websiteId)
        .subscribe((pages) => {
          this.pages = pages;
        });
    });
  }

}
