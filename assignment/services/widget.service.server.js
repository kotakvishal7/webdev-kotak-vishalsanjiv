module.exports = function(app) {

  var WIDGETS = [
    {_id: '123', type: 'HEADING', pageId: '123', size: '2', text: 'Lorem', url: '', width: '', name: ''},
    {_id: '234', type: 'HEADING', pageId: '123', size: '4', text: 'Lorem', url: '', width: '', name: ''},
    {_id: '345', type: 'IMAGE', pageId: '321', width: '200', url: 'http://lorempixel.com/400/200/', size: ''
      , text: '', name: 'Test Image'},
    {_id: '456', type: 'HTML', pageId: '321', text: 'Lorem', url: '', width: '', size: '', name: ''},
    {_id: '567', type: 'HEADING', pageId: '789', size: '4', text: 'Lorem', url: '', width: '', name: ''},
    {_id: '678', type: 'YOUTUBE', pageId: '789', width: '100', text: 'Introduction to HTML',
      url: 'https://www.youtube.com/embed/ekIRCLFFvBI' , size: '', name: 'Web Development'},
    {_id: '789', type: 'IMAGE', pageId: '789', text: 'Lorem', url: 'http://lorempixel.com/400/200/'
      , size: '', width: '200', name: 'Test Image'}
  ];

  app.get('/api/user/:uid/website/:wid/page/:pid/widget', findWidgetsByPageId);
  app.post('/api/user/:uid/website/:wid/page/:pid/widget', createWidget);
  app.delete('/api/user/:uid/website/:wid/page/:pid/widget/:wgid', deleteWidget);
  app.get('/api/user/:uid/website/:wid/page/:pid/widget/:wgid', findWidgetById);
  app.put('/api/user/:uid/website/:wid/page/:pid/widget/:wgid', updateWidget);

  var multer = require('multer');
  var upload = multer({ dest: __dirname+ '/../../dist/assets/uploads' });

  app.post("/api/upload", upload.single('myFile'), uploadImage);

  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    if(!widgetId) {
      widgetId = (new Date()).getTime() + '';
    }
    widget = {
      '_id': widgetId,
      'widgetType': 'IMAGE',
      'pageId': pageId,
      'width': '100'
    };
    widget['url'] = 'assets/uploads/'+filename;
    WIDGETS.push(widget);
    console.log(WIDGETS);
    var callbackUrl = "/user/" + userId + "/website/" + websiteId + '/page/' + pageId + '/widget';
    res.redirect(callbackUrl);
  }

  function updateWidget(request, response) {
    var pageId = request.params['pid'];
    var widgetId = request.params['wgid'];
    var widget = request.body;
    for(var x = 0; x < WIDGETS.length; x++) {
      if (WIDGETS[x]._id === widgetId) {
        WIDGETS[x] = widget;
        var widgets = getWidgetsForPageId(pageId);
        response.json(widgets);
      }
    }
  }

  function findWidgetById(request, response) {
    var widgetId = request.params['wgid'];
    var widget = {};
    for (var x = 0; x < WIDGETS.length; x++) {
      if (WIDGETS[x]._id === widgetId) {
        widget = WIDGETS[x];
        response.json(widget);
      }
    }
  }

  function deleteWidget(request, response) {
    var pageId = request.params['pid'];
    var widgetId = request.params['wgid'];
    for(var x = 0; x < WIDGETS.length; x++) {
      if(WIDGETS[x]._id === widgetId) {
        WIDGETS.splice(x, 1);
        var widgets = getWidgetsForPageId(pageId);
        response.json(widgets);
      }
    }
  }

  function createWidget(request, response) {
    var pageId = request.params['pid'];
    var widget = request.body;
    widget.pageId = pageId;
    widget._id = (new Date()).getTime() + '';
    WIDGETS.push(widget);
    var widgets = getWidgetsForPageId(pageId);
    response.json(widgets);
  }

  function getWidgetsForPageId(pageId) {
    var widgets = [];
    for (var x = 0; x < WIDGETS.length; x++) {
      if (WIDGETS[x].pageId === pageId) {
        widgets.push(WIDGETS[x]);
      }
    }
    return widgets;
  }

  function findWidgetsByPageId(request, response) {
    var pageId = request.params['pid'];
    var widgets = [];
    for (var x = 0; x < WIDGETS.length; x++) {
      if (WIDGETS[x].pageId === pageId) {
        widgets.push(WIDGETS[x]);
      }
    }
    response.json(widgets);
  }

};
