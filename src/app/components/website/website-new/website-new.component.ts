import {Component, OnInit, ViewChild} from '@angular/core';
import { WebsiteService} from '../../../services/website.service.client';
import { Website} from '../../../models/website.model.client';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') newWebsiteForm: NgForm;


  userId: String;
  websites: Website[];
  showError: Boolean;

  constructor(private websiteService: WebsiteService,
              private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.websites = this.websiteService.findWebsitesByUser(this.userId);
      this.showError = false;
    });
  }
  createWebsite(websiteName: String, websiteDescription: String) {
    if (!websiteName || !websiteDescription) {
      this.showError = true;
      return;
    }
    let website = new Website(websiteName, this.userId, websiteDescription);
    website = this.websiteService.createWebsite(this.userId, website);
    if (website) {
      this.router.navigate(['/user', this.userId, 'website']);
    }
  }
}
