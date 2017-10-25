module.exports = function(app) {

  app.get('/api/user/hello', helloUser);
  // find all users
  app.get('/api/user', findUsers);
  // find user by id
  app.get('/api/user/:uid', findUserById);

  var users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', emailId: 'alice@gmail.com'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', emailId: 'bob@gmail.com'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', emailId: 'charly@gmail.com'},
    {_id: '456', username: 'kotakv', password: 'kotak', firstName: 'Vishal', lastName: 'Kotak', emailId: 'kotakv@gmail.com'}
  ];

  function helloUser(req, res) {
    res.send('Hello from user service');
  }

  function findUsers(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    if(username && password) {
      var user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
      if (user) {
        res.send(user);
      }
      else {
        res.send({});
      }
      return;
    } else if(username) {
      var user = users.find(function (user) {
        return user.username === username;
      });
      if (user) {
        res.send(user);
      }
      else {
        res.status(404).send("No user found");
      }
      return;
    }
    res.json(users);
  }

  function findUserById(req, res) {
    var userId = req.params['uid'];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
  }
}
