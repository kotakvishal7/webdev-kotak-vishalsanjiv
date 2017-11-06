var mongoose = require('mongoose');
var WebsiteSchema = mongoose.Schema ({
  developerId: String,
  name: String,
  description: String
}, {collection: 'website'});

module.exports = WebsiteSchema;
