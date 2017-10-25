import { Component, OnInit } from '@angular/core';
import { Page } from '../../../models/page.model.client';
import { ActivatedRoute } from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import { Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  userId: String;
  websiteId: String;
  pages: Page[];
  showError: Boolean;
  constructor(private pageService: PageService,
              private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.showError = false;
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageService
        .findPagebyWebsiteId(this.userId, this.websiteId)
        .subscribe((pages) => {
          this.pages = pages;
        });
    });
  }
  createPage(pageName: String, pageTitle: String) {
    if (!pageName || !pageTitle) {
      this.showError = true;
      return;
    }
    const page = new Page(pageName, pageTitle, this.websiteId);
    this.pageService
      .createPage(this.userId, this.websiteId, page)
      .subscribe((pages) => {
        this.pages = pages;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId,  'page']);
      });
  }

}
