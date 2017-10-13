export class Page {
  _id: String;
  name: String;
  description: String;
  websiteId: String;
  constructor(name: String, description: String, websiteId: String) {
    this.name = name;
    this.description = description;
    this.websiteId = websiteId;
  }
}

