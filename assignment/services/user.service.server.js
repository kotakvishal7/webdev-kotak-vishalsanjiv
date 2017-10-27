module.exports = function(app) {

  app.get('/api/user/hello', helloUser);
  // find all users
  app.get('/api/user', findUsers);
  // find user by id
  app.get('/api/user/:uid', findUserById);

  app.post('/api/user', createUser);
  app.put('/api/user/:uid', updateUser);
  app.delete('/api/user/:uid', deleteUser);

  var USERS = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', emailId: 'alice@gmail.com'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', emailId: 'bob@gmail.com'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', emailId: 'charly@gmail.com'},
    {_id: '456', username: 'kotakv', password: 'kotak', firstName: 'Vishal', lastName: 'Kotak', emailId: 'kotakv@gmail.com'}
  ];

  function deleteUser(request, response) {
    var userId = request.params['uid'];
    for(var x = 0; x < USERS.length; x++) {
      if(USERS[x]._id === userId) {
        USERS.splice(x, 1);
        response.json({});
      }
    }
  }

  function updateUser(request, response) {
    var userId = request.params['uid'];
    var user = request.body;
    for(var x = 0; x < USERS.length; x++) {
      if (USERS[x]._id === userId) {
        USERS[x] = user;
        response.json(user);
      }
    }
  }
  function createUser(request, response) {
    var user = request.body;
    user._id = (new Date()).getTime() + '';
    USERS.push(user);
    response.json(user);
  }

  function helloUser(req, res) {
    res.send('Hello from user service');
  }

  function findUsers(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    if(username && password) {
      var user = USERS.find(function (user) {
        return user.username === username && user.password === password;
      });
      if (user) {
        res.send(user);
      }
      else {
        res.status(401).send("No user found");
      }
      return;
    } else if(username) {
      var user = USERS.find(function (user) {
        return user.username === username;
      });
      if (user) {
        res.send(user);
      }
      else {
        res.status(401).send("No user found");
      }
      return;
    }
    res.json(USERS);
  }

  function findUserById(req, res) {
    var userId = req.params['uid'];
    var user = USERS.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
  }
}
