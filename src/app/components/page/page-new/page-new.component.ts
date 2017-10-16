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
      this.pages = this.pageService.findPagebyWebsiteId(this.websiteId);
    });
  }
  createPage(pageName: String, pageTitle: String, websiteId: String) {
    if (!pageName || !pageTitle) {
      this.showError = true;
      return;
    }
    let page = new Page(pageName, pageTitle, websiteId);
    page = this.pageService.createPage(websiteId, page);
    if (page) {
      this.router.navigate(['/user', this.userId, 'website', this.websiteId,  'page']);
    }
  }

}
