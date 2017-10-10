import { Component, OnInit } from '@angular/core';
import { WebsiteService} from '../../../services/website.service.client';
import { Website} from '../../../models/website.model.client';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  userId: String;
  website: Website;
  websites: Website[];
  constructor(private websiteService: WebsiteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>  {
      this.userId = params['uid'];
      this.websites = this.websiteService.findWebsitesByUser(this.userId);
    });
  }

}
