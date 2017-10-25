module.exports = function(app) {

  var WEBSITES = [
    {_id: '123', name: 'Facebook', developerId: '456', description: 'Lorem'},
    {_id: '234', name: 'Twitter', developerId: '456', description: 'Lorem'},
    {_id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem'},
    {_id: '890', name: 'Go', developerId: '123', description: 'Lorem'},
    {_id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem'},
    {_id: '678', name: 'Checkers', developerId: '123', description: 'Lorem'},
    {_id: '789', name: 'Chess', developerId: '234', description: 'Lorem'}

  ];

  app.get('/api/user/:uid/website', findWebsitesByUser);
  app.post('/api/user/:uid/website', createWebsite);
  app.delete('/api/user/:uid/website/:wid', deleteWebsite);
  app.get('/api/user/:uid/website/:wid', findWebsiteById);
  app.put('/api/user/:uid/website/:wid', updateWebsite);

  function updateWebsite(request, response) {
    var userId = request.params['uid'];
    var websiteId = request.params['wid'];
    var website = request.body;

    for(var x = 0; x < WEBSITES.length; x++) {
      if (WEBSITES[x]._id === websiteId) {
        WEBSITES[x] = website;
        var websites = getWebsiteForUserId(userId);
        response.json(websites);
      }
    }
  }

  function findWebsiteById(request, response) {
    var userId = request.params['uid'];
    var websiteId = request.params['wid'];
    var website = {};
    for (var x = 0; x < WEBSITES.length; x++) {
      if (WEBSITES[x]._id === websiteId) {
        website = WEBSITES[x];
        response.json(website);
      }
    }
  }


  function findWebsitesByUser(request, response) {
    var userId = request.params['uid'];
    var websites = [];
    for (var x = 0; x < WEBSITES.length; x++) {
       if (WEBSITES[x].developerId === userId) {
         websites.push(WEBSITES[x]);
       }
    }
    response.json(websites);
  }

  function createWebsite(request, response) {
    var userId = request.params['uid'];
    var website = request.body;
    website.developerId = userId;
    website._id = (new Date()).getTime() + '';
    WEBSITES.push(website);
    var websites = getWebsiteForUserId(userId);
    response.json(websites);
  }

  function getWebsiteForUserId(userId) {
    var websites = [];
    for (var x = 0; x < WEBSITES.length; x++) {
      if (WEBSITES[x].developerId === userId) {
        websites.push(WEBSITES[x]);
      }
    }
    return websites;
  }

  function deleteWebsite(request, response) {
    var websiteId = request.params['wid'];
    var userId = request.params['uid'];
    for(var x = 0; x < WEBSITES.length; x++) {
      if(WEBSITES[x]._id === websiteId) {
        WEBSITES.splice(x, 1);
        var websites = getWebsiteForUserId(userId);
        response.json(websites);
      }
    }
  }
};
