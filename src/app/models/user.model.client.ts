export class User {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  emailId: String;
  constructor(_id: String, username: String, password: String) {
    this._id = _id;
    this.username = username;
    this.password = password;
  }
}
