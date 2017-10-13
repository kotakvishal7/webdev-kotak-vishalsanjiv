import { Component, OnInit } from '@angular/core';
import { WebsiteService} from '../../../services/website.service.client';
import { Website} from '../../../models/website.model.client';
import { ActivatedRoute} from '@angular/router';


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
  constructor(private websiteService: WebsiteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>  {
      this.websiteId = params['wid'];
      this.userId = params['uid'];
      this.website = this.websiteService.findWebsiteById(this.websiteId);
      this.websites = this.websiteService.findWebsitesByUser(this.userId);
    });
  }

  deleteWebsite(websiteId: String) {
    this.websiteService.deleteWebsite(websiteId);
  }
  updateWebsite(websiteName: String, websiteDescription: String, websiteId: String) {
    this.website.name = websiteName;
    this.website.description = websiteDescription;
    this.websiteService.updateWebsite(websiteId, this.website);
  }

}
