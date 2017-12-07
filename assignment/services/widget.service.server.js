module.exports = function(app) {


  app.get('/api/user/:uid/website/:wid/page/:pid/widget', findWidgetsByPageId);
  app.post('/api/user/:uid/website/:wid/page/:pid/widget', createWidget);
  app.delete('/api/user/:uid/website/:wid/page/:pid/widget/:wgid', deleteWidget);
  app.get('/api/user/:uid/website/:wid/page/:pid/widget/:wgid', findWidgetById);
  app.put('/api/user/:uid/website/:wid/page/:pid/widget/:wgid', updateWidget);

  var widgetModel = require('../models/widget/widget.model.server');

  var multer = require('multer');
  var upload = multer({ dest: __dirname+ '/../../dist/assets/uploads' });

  app.post("/api/upload", upload.single('myFile'), uploadImage);

  function uploadImage(request, response) {
    var widgetId = request.body.widgetId;
    // var width = request.body.widgetWidth;
    var width = request.body.width + '';
    var name = 'Upload';
    var myFile = request.file;
    var text = 'Upload';
    var userId = request.body.userId;
    var websiteId = request.body.websiteId;
    var pageId = request.body.pageId;

    var filename = myFile.filename;     // new file name in upload folder

    var widget = {
        '_id': widgetId,
        'type': 'IMAGE',
        'pageId': pageId,
        'width': width,
        'name': name,
        'text': text
    };
    widget['url'] = 'assets/uploads/'+filename;
    delete widget._id;
    widgetModel
      .createWidget(widget)
      .then(function(newWidget) {
        console.log(newWidget);
      });

    var callbackUrl = "/user/" + userId + "/website/" + websiteId + '/page/' + pageId + '/widget';
    response.redirect(callbackUrl);
  }

  function updateWidget(request, response) {
    var widgetId = request.params['wgid'];
    var widget = request.body;
    widgetModel
      .updateWidget(widgetId, widget)
      .then(function(status) {
        response.send(status);
      });
  }

  function findWidgetById(request, response) {
    var widgetId = request.params['wgid'];
    widgetModel
      .findWidgetById(widgetId)
      .then(function(widget) {
        response.json(widget);
      });
  }

  function deleteWidget(request, response) {
    var pageId = request.params['pid'];
    var widgetId = request.params['wgid'];
    widgetModel
      .deleteWidget(widgetId)
      .then(function(status) {
        response.send(status);
        widgetModel
          .findWidgetsByPageId(pageId)
          .then(function(widgets) {
            response.json(widgets);
          }, function(error) {
            console.log(error);
          });
      });
  }

  function createWidget(request, response) {
    var pageId = request.params['pid'];
    var newWidget = request.body;
    newWidget.pageId = pageId;
    delete newWidget._id;
    widgetModel
      .createWidget(newWidget)
      .then(function(widget) {
        widgetModel
          .findWidgetsByPageId(pageId)
          .then(function(widgets) {
            response.json(widgets);
          }, function(error) {
            console.log(error);
          });
      }, function(error) {
        console.log(error);
      });
  }

  function findWidgetsByPageId(request, response) {
    var pageId = request.params['pid'];
    widgetModel
      .findWidgetsByPageId(pageId)
      .then(function(widgets) {
        response.json(widgets);
      }, function(error) {
        console.log(error);
      });
  }

};
