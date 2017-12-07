import { Component, OnInit } from '@angular/core';
import { WebsiteService} from '../../../services/website.service.client';
import { Website} from '../../../models/website.model.client';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  userId: String;
  websiteId: String;
  website: Website;
  websites: Website[];
  websiteName: String;
  websiteDescription: String;
  showError: Boolean;
  constructor(private websiteService: WebsiteService,
              private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>  {
      this.websiteId = params['wid'];
      this.userId = params['uid'];
      this.showError = false;
      this.websiteService
        .findWebsiteById(this.userId, this.websiteId)
        .subscribe((website) => {
          this.website = website;
          this.websiteName = website.name;
          this.websiteDescription = website.description;
        });
      this.websiteService
        .findWebsitesByUser(this.userId)
        .subscribe((websites) => {
          this.websites = websites;
        });
    });
  }

  deleteWebsite(websiteId: String) {
    this.websiteService
      .deleteWebsite(this.userId, websiteId)
      .subscribe((websites) => {
          this.websites = websites;
        this.router.navigate(['/user', this.userId, 'website']);
      });
  }
  updateWebsite(websiteName: String, websiteDescription: String) {
    if (!websiteName || !websiteDescription) {
      this.showError = true;
      return;
    }
    const website = new Website(websiteName, this.userId, websiteDescription);
    website._id = this.websiteId;
    this.websiteService
      .updateWebsite(this.userId, website)
      .subscribe((websites) => {
        this.websites = websites;
        this.router.navigate(['/user', this.userId, 'website']);
      });
  }

}
