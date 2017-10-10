export class Widget {
  _id: String;
  widgetType: String;
  pageId: String;
  size: String;
  width: String;
  text: String;
  url: String;
  constructor(_id, widgetType, pageId) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
  }
}
