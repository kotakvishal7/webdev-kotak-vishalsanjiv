var WidgetSchema = require('./widget.schema.server');
var mongoose = require('mongoose');
var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);

WidgetModel.createWidget = createWidget;
WidgetModel.findWidgetsByPageId = findWidgetsByPageId;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.updateWidget = updateWidget;

module.exports = WidgetModel;

function createWidget(widget) {
  return WidgetModel.create(widget);
}

function findWidgetsByPageId(pageId) {
  return WidgetModel.find({pageId: pageId});
}

function findWidgetById(widgetId) {
  return WidgetModel.findById(widgetId);
}

function deleteWidget(widgetId) {
  return WidgetModel.remove({_id: widgetId});
}

function updateWidget(widgetId, widget) {
  return WidgetModel.update({_id: widgetId}, widget);
}
