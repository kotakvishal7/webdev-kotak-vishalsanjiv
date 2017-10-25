import { Component, OnInit } from '@angular/core';
import { WebsiteService} from '../../../services/website.service.client';
import { Website} from '../../../models/website.model.client';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: String;
  websites: Website[];
  constructor(private websiteService: WebsiteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>  {
      this.userId = params['uid'];
      this.websiteService
        .findWebsitesByUser(this.userId)
        .subscribe((websites) => {
          this.websites = websites;
        });
    });
  }
}
