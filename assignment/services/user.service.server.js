module.exports = function(app) {

  var userModel = require('../models/user/user.model.server');

  var passport  = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));


  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  app.get('/api/user/hello', helloUser);
  // find all users
  app.get('/api/user', findUsers);
  // find user by id
  app.get('/api/user/:uid', findUserById);

  app.post('/api/user', createUser);
  app.put('/api/user/:uid', updateUser);
  app.delete('/api/user/:uid', deleteUser);

  app.post('/api/register', register);
  app.post('/api/login',
    passport.authenticate('local'), login);



  function login(request, response) {
    response.json(request.user);
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByCredentials(username, password)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }
      );
  }


  function register(request, response) {
    var user = request.body;
    userModel
      .createUser(user)
      .then(function(user){
        request.login(user, function(error) {
          response.json(user);
        });
      });
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function createUser(request, response) {
    var newUser = request.body;
    delete newUser._id;
    userModel
      .createUser(newUser)
      .then(function(user) {
        res.json(user);
      }, function(error) {
        console.log(error);
      });

  }

  function deleteUser(request, response) {
    var userId = request.params['uid'];
    userModel
      .deleteUser(userId)
      .then(function(status) {
        response.send(status);
      });
  }

  function updateUser(request, response) {
    var userId = request.params['uid'];
    var user = request.body;
    userModel
      .updateUser(userId, user)
      .then(function(status) {
        response.send(status);
      });
  }

  function helloUser(req, res) {
    res.send('Hello from user service');
  }

  function findUsers(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    if(username && password) {
      var promise = userModel
        .findUserByCredentials(username, password);
      promise
        .then(function(user) {
        res.json(user);
      });
      return;
    } else if(username) {
      userModel
        .findUserByUsername(username)
        .then(function(user) {
          res.json(user);
         });
      return;
    }
  }

  function findUserById(req, res) {
    var userId = req.params['uid'];
    userModel
      .findUserById(userId)
      .then(function(user) {
        res.json(user);
      });
  }
}
