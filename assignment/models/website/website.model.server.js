var WebsiteSchema = require('./website.schema.server');
var mongoose = require('mongoose');
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

WebsiteModel.createWebsite = createWebsite;
WebsiteModel.findWebsitesByUserId = findWebsitesByUserId;

module.exports = WebsiteModel;

function createWebsite(website) {
  return WebsiteModel.create(website);
}

function findWebsitesByUserId(userId) {
  return WebsiteModel.find({developerId: userId});
}
