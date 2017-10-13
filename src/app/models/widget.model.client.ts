export class Widget {
  _id: String;
  type: String;
  pageId: String;
  size: String;
  width: String;
  text: String;
  url: String;
  name: String;
  constructor(_id: String, type: String, pageId: String) {
    this._id = _id;
    this.type = type;
    this.pageId = pageId;
  }
}
