module.exports = function(app) {

  app.get('/api/user/:uid/website/:wid/page', findPagesbyWebsiteId);
  app.post('/api/user/:uid/website/:wid/page', createPage);
  app.get('/api/user/:uid/website/:wid/page/:pid', findPageById);
  app.delete('/api/user/:uid/website/:wid/page/:pid', deletePage);
  app.put('/api/user/:uid/website/:wid/page/:pid', updatePage);

  var pageModel = require('../models/page/page.model.server');

  function updatePage(request, response) {
    var pageId = request.params['pid'];
    var page = request.body;
    pageModel
      .updatePage(pageId, page)
      .then(function(status) {
        response.send(status);
      });
  }

  function deletePage(request, response) {
    var websiteId = request.params['wid'];
    var pageId = request.params['pid'];
    pageModel
      .deletePage(pageId)
      .then(function(status) {
        response.send(status);
        pageModel
          .findPagesByWebsiteId(websiteId)
          .then(function(pages) {
            response.json(pages);
          }, function(error) {
            console.log(error);
          });
      });
  }

  function findPageById(request, response) {
    var pageId = request.params['pid'];
    pageModel
      .findPageById(pageId)
      .then(function(page) {
        response.json(page);
      });
  }

  function createPage(request, response) {
    var websiteId = request.params['wid'];
    var page = request.body;
    delete page._id;
    page.websiteId = websiteId;
    pageModel
      .createPage(page)
      .then(function(page) {
        pageModel
          .findPagesByWebsiteId(websiteId)
          .then(function(pages) {
            response.json(pages);
          }, function(error) {
            console.log(error);
          });
      }, function(error) {
        console.log(error);
      });
  }

  function findPagesbyWebsiteId(request, response) {
    var websiteId = request.params['wid'];
    pageModel
      .findPagesByWebsiteId(websiteId)
      .then(function(pages) {
        response.json(pages);
      }, function(error) {
        console.log(error);
      });
  }
};
