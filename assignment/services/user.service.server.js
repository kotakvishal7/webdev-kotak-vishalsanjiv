module.exports = function(app) {

  var userModel = require('../models/user/user.model.server');

  var facebookConfig = {
     clientID     : process.env.FACEBOOK_CLIENT_ID || '1868107783216561',
     clientSecret : process.env.FACEBOOK_CLIENT_SECRET || '5fff051a36f5b3f598d6241bafd2b3a1',
     callbackURL  : process.env.FACEBOOK_CALLBACK_URL || 'https://webdev-kotak-vishalsanjiv.herokuapp.com/auth/facebook/callback'

  };

  var passport  = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var bcrypt = require("bcrypt-nodejs");
  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

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
  app.post ('/api/loggedIn', loggedin);
  app.post('/api/register', register);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.get("/facebook/login", passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    }));

  function login(request, response) {
    response.json(request.user);
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function localStrategy(username, password, done) {
    // var passwordEncrypted = bcrypt.hashSync(password);
    userModel
      .findUserByUsername(username)
      .then(
        function(user) {
          const temp = bcrypt.compareSync(password, user.password);
          if(user.username === username
            && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }
      );
  }


  function facebookStrategy(token, refreshToken, profile, done) {
    console.log('Inside Facebook Strategy');
    userModel
      .findUserByFacebookId(profile.id)
      .then(function(user) {
          console.log(user);
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              firstName:  names[0],
              lastName:  names[1],
              facebook: {
                id:    profile.id,
                token: token
              },
              email: profile.emails[0].value
            };
            userModel
              .createUser(newFacebookUser)
              .then(function (user) {
                return done(null, user);
              });
          }
        },
        function(err) {
          if (err) {
            console.log(err);
            return done(err);
          }
        });
  }

  function register(request, response) {
    var user = request.body;
    user.password = bcrypt.hashSync(user.password);

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
    var password = bcrypt.hashSync(req.query['password']);
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
