import { Component, OnInit } from '@angular/core';
import { Page } from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
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
  pageName: String;
  pageDescription: String;
  showError: Boolean;
  constructor(private pageService: PageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.showError = false;
      this.pageService
        .findPagebyWebsiteId(this.userId, this.websiteId)
        .subscribe((pages) => {
          this.pages = pages;
        });
      this.pageService
        .findPageById(this.userId, this.websiteId, this.pageId)
        .subscribe((page) => {
          this.page = page;
          this.pageName = page.name;
          this.pageDescription = page.description;
        });
    });
  }

  deletePage(pageId: String) {
    this.pageService
      .deletePage(this.userId, this.websiteId, pageId)
      .subscribe((pages) => {
        this.pages = pages;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
      });
  }

  updatePage(pageName: String, pageTitle: String) {
    if (!pageName || !pageTitle) {
      this.showError = true;
      return;
    }
    const page = new Page(pageName, pageTitle, this.websiteId);
    page._id = this.pageId;
    this.pageService
      .updatePage(this.userId, this.websiteId, page)
      .subscribe((pages) => {
        this.pages = pages;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
      });
  }
}
