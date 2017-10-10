import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import { Page } from '../models/page.model.client';

// injecting service into module
@Injectable()

export class PageService {
  constructor() {}
  pages: Page[] = [
    {_id: '321', name: 'Post 1', websiteId: '456', description: 'lorem'},
    {_id: '432', name: 'Post 2', websiteId: '456', description: 'lorem'},
    {_id: '543', name: 'Post 3', websiteId: '456', description: 'lorem'},
    {_id: '789', name: 'Post 4', websiteId: '890', description: 'lorem'},
    {_id: '890', name: 'Post 5', websiteId: '567', description: 'lorem'},
    {_id: '123', name: 'Post 6', websiteId: '678', description: 'lorem'},
  ];
  api = {
    createPage: this.createPage,
    findPagebyWebsiteId: this.findPagebyWebsiteId,
    findPageById: this.findPageById,
    updatePage: this.updatePage,
    deletePage: this.deletePage
  };
  createPage(websiteId: string, page: any) {
    page._id = Math.random();
    this.pages.push(page);
    return page;
  }
  findPagebyWebsiteId(websiteId: String) {
    const websitePages: Page[] = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) { websitePages.push(this.pages[x]); }
    }
    return websitePages;
  }
  findPageById(pageId: String) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) { return this.pages[x]; }
    }
  }
  updatePage(pageId: string, page: any) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) { this.pages[x] = page; }
    }
  }
  deletePage(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) { this.pages.splice(x, 1); }
    }
  }
}
