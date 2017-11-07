var PageSchema = require('./page.schema.server');
var mongoose = require('mongoose');
var PageModel = mongoose.model('PageModel', PageSchema);

PageModel.createPage = createPage;
PageModel.findPagesByWebsiteId = findPagesByWebsiteId;
PageModel.findPageById = findPageById;
PageModel.deletePage = deletePage;
PageModel.updatePage = updatePage;

module.exports = PageModel;

function createPage(page) {
  return PageModel.create(page);
}

function findPagesByWebsiteId(websiteId) {
  return PageModel.find({websiteId: websiteId});
}

function findPageById(pageId) {
  return PageModel.findById(pageId);
}

function deletePage(pageId) {
  return PageModel.remove({_id: pageId});
}

function updatePage(pageId, page) {
  return PageModel.update({_id: pageId}, page);
}
