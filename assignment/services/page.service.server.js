module.exports = function(app) {

  var PAGES = [
    {_id: '321', name: 'Post 1', websiteId: '890', description: 'lorem'},
    {_id: '432', name: 'Post 2', websiteId: '890', description: 'lorem'},
    {_id: '543', name: 'Post 3', websiteId: '890', description: 'lorem'},
    {_id: '789', name: 'Post 4', websiteId: '567', description: 'lorem'},
    {_id: '890', name: 'Post 5', websiteId: '567', description: 'lorem'},
    {_id: '123', name: 'Post 6', websiteId: '567', description: 'lorem'}
  ];

  app.get('/api/user/:uid/website/:wid/page', findPagesbyWebsiteId);
  app.post('/api/user/:uid/website/:wid/page', createPage);
  app.get('/api/user/:uid/website/:wid/page/:pid', findPageById);
  app.delete('/api/user/:uid/website/:wid/page/:pid', deletePage);
  app.put('/api/user/:uid/website/:wid/page/:pid', updatePage);

  function updatePage(request, response) {
    var websiteId = request.params['wid'];
    var pageId = request.params['pid'];
    var page = request.body;

    for(var x = 0; x < PAGES.length; x++) {
      if (PAGES[x]._id === pageId) {
        PAGES[x] = page;
        var pages = getPagesForWebsiteId(websiteId);
        response.json(pages);
      }
    }
  }

  function deletePage(request, response) {
    var websiteId = request.params['wid'];
    var pageId = request.params['pid'];
    for(var x = 0; x < PAGES.length; x++) {
      if(PAGES[x]._id === pageId) {
        PAGES.splice(x, 1);
        var pages = getPagesForWebsiteId(websiteId);
        response.json(pages);
      }
    }
  }

  function findPageById(request, response) {
    var pageId = request.params['pid'];
    var page = {};
    for (var x = 0; x < PAGES.length; x++) {
      if (PAGES[x]._id === pageId) {
        page = PAGES[x];
        response.json(page);
      }
    }
  }

  function createPage(request, response) {
    var websiteId = request.params['wid'];
    var page = request.body;
    page.websiteId = websiteId;
    page._id = (new Date()).getTime() + '';
    PAGES.push(page);
    var pages = getPagesForWebsiteId(websiteId);
    response.json(pages);
  }

  function getPagesForWebsiteId(websiteId) {
    var pages = [];
    for (var x = 0; x < PAGES.length; x++) {
      if (PAGES[x].websiteId === websiteId) {
        pages.push(PAGES[x]);
      }
    }
    return pages;
  }

  function findPagesbyWebsiteId(request, response) {
    var websiteId = request.params['wid'];
    var pages = [];
    for (var x = 0; x < PAGES.length; x++) {
      if (PAGES[x].websiteId === websiteId) {
        pages.push(PAGES[x]);
      }
    }
    response.json(pages);
  }
};
