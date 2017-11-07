var WebsiteSchema = require('./website.schema.server');
var mongoose = require('mongoose');
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

WebsiteModel.createWebsite = createWebsite;
WebsiteModel.findWebsitesByUserId = findWebsitesByUserId;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.deleteWebsite = deleteWebsite;
WebsiteModel.updateWebsite = updateWebsite;

module.exports = WebsiteModel;

function createWebsite(website) {
  return WebsiteModel.create(website);
}

function findWebsitesByUserId(userId) {
  return WebsiteModel.find({developerId: userId});
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId);
}

function deleteWebsite(websiteId) {
  return WebsiteModel.remove({_id: websiteId});
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.update({_id: websiteId}, website);
}
