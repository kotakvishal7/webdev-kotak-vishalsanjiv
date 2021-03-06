var mongoose = require('mongoose');
var WidgetSchema = mongoose.Schema ({
  pageId: String,
  type  : String,
  size  : String,
  width : String,
  text  : String,
  url   : String,
  rows  : Number,
  name  : String,
  formatted: Boolean,
  placeholder: String
}, {collection: 'widget'});

module.exports = WidgetSchema;
