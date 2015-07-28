var $ = require('jquery');
var Backbone = require('backbone');
var listProductsTemplate = require('../templates/list-products.hbs');

// App

var App = require('../app');

// View: List Products

var ListProducts = Backbone.View.extend({
	el: $('main'),

	collection: App.Collections.shoe,

	render: function () {
		var _this = this;
		var productCollection = this.collection;

		// Fetch Collection from Server
		productCollection.fetch().done(function (products) {
			// productCollection.add(products);
			_this.$el.html(listProductsTemplate(products))
		})
	}
})

module.exports = ListProducts;