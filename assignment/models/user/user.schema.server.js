var mongoose = require('mongoose');
var UserSchema = mongoose.Schema ({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  emailId: String,
}, {collection: 'user'});

module.exports = UserSchema;
