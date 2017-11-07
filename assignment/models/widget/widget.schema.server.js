var mongoose = require('mongoose');
var WidgetSchema = mongoose.Schema ({
  pageId: String,
  type  : String,
  size  : String,
  width : String,
  text  : String,
  url   : String,
  name  : String
}, {collection: 'widget'});

module.exports = WidgetSchema;
