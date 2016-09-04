var Backbone = require('backbone');


/****************************************
  App
*****************************************/

var App = require('../app');
var Shoe = require('../models/shoe');

/****************************************
  Collection: Shoe
*****************************************/

var ShoeCollection = Backbone.Collection.extend({
  url: App.Settings.apiRoot + '/shoes',
  model: Shoe
});

App.Collections.shoe = new ShoeCollection();

module.exports = App.Collections.shoe;