var mongoose = require('mongoose');
var PageSchema = mongoose.Schema ({
  websiteId: String,
  name: String,
  description: String
}, {collection: 'page'});

module.exports = PageSchema;
