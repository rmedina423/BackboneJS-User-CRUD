var $ = require('jquery');
var Backbone = require('backbone');
var formTemplate = require('../templates/product-form.hbs');


/****************************************
  App
*****************************************/

var App = require('../app');
var Product = require('../models/shoe.js')

/****************************************
  View: Product Form
*****************************************/

var ProductFormView = Backbone.View.extend({
	el: 'main',
	editMode: false,

	render: function (ShoeId) {
		var _this = this;
		this.editMode = !!ShoeId;

		// Display form in Create Mode
		if (!this.editMode) {
			var output = formTemplate();
			this.$el.html(output)

		// Display form in Update Mode
		} else {
			var product = this.product = new Product({id: ShoeId});

			product.fetch().done(function () {
				var output = formTemplate(product.toJSON());
				_this.$el.html(output);
			})
		}
	}
})

module.exports = ProductFormView;