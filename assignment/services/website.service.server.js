module.exports = function(app) {

  app.get('/api/user/:uid/website', findWebsitesByUser);
  app.post('/api/user/:uid/website', createWebsite);
  app.delete('/api/user/:uid/website/:wid', deleteWebsite);
  app.get('/api/user/:uid/website/:wid', findWebsiteById);
  app.put('/api/user/:uid/website/:wid', updateWebsite);

  var websiteModel = require('../models/website/website.model.server');

  function updateWebsite(request, response) {
    var websiteId = request.params['wid'];
    var website = request.body;
    websiteModel
      .updateWebsite(websiteId, website)
      .then(function(status) {
        response.send(status);
      });
  }

  function findWebsiteById(request, response) {
    var websiteId = request.params['wid'];
    websiteModel
      .findWebsiteById(websiteId)
      .then(function(website) {
        response.json(website);
      });
  }


  function findWebsitesByUser(request, response) {
    var userId = request.params['uid'];
    websiteModel
      .findWebsitesByUserId(userId)
      .then(function(websites) {
        response.json(websites);
      }, function(error) {
        console.log(error);
      });
  }

  function createWebsite(request, response) {
    var userId = request.params['uid'];
    var website = request.body;
    website.developerId = userId;
    delete website._id;
    websiteModel
      .createWebsite(website)
      .then(function(website) {
        websiteModel
          .findWebsitesByUserId(userId)
          .then(function(websites) {
            response.json(websites);
          }, function(error) {
            console.log(error);
          });
      }, function(error) {
          console.log(error);
      });
  }

  function deleteWebsite(request, response) {
    var websiteId = request.params['wid'];
    var userId = request.params['uid'];
    websiteModel
      .deleteWebsite(websiteId)
      .then(function(status) {
        response.send(status);
        websiteModel
          .findWebsitesByUserId(userId)
          .then(function(websites) {
            response.json(websites);
          }, function(error) {
            console.log(error);
          });
      });
  }
};
