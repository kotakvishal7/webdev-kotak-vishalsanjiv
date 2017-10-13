import { Component, OnInit } from '@angular/core';
import { WebsiteService} from '../../../services/website.service.client';
import { Website} from '../../../models/website.model.client';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  userId: String;
  websites: Website[];

  constructor(private websiteService: WebsiteService,
              private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websites = this.websiteService.findWebsitesByUser(this.userId);
    });
  }
  createWebsite(websiteName: String, websiteDescription: String) {
    let website = new Website(websiteName, this.userId, websiteDescription);
    website = this.websiteService.createWebsite(this.userId, website);
    if (website) {
      this.router.navigate(['/user', this.userId, 'website']);
    }
  }
}
