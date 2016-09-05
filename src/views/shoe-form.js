var $ = require('jquery');
var Backbone = require('backbone');
var formTemplate = require('../templates/product-form.hbs');
var shoeSizeTemplate = require('../templates/shoe-size.hbs');
var shoeColorTemplate = require('../templates/shoe-color.hbs');

var shoeDescription = {
	size: shoeSizeTemplate,
	color: shoeColorTemplate
};

/****************************************
  App
*****************************************/

var App = require('../app');
var Product = require('../models/shoe.js');

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
			this.$el.html(formTemplate(shoeDescription));

		// Display form in Update Mode
		} else {
			var product = this.product = new Product({id: ShoeId});

			product.fetch().done(function (shoe) {
				var output = formTemplate(shoeDescription);
				var form = _this.$el.find($('form.product'));

				_this.$el.html(output);

				form.find($('select[name="type"]')).val(shoe.type);
				form.find($('select[name="size"]')).val(shoe.size);
				form.find($('select[name="color"]')).val(shoe.color);
			});
		}
	},

	events: {
		"submit form.product": "submitForm" 
	},

	submitForm: function (event) {
		event.preventDefault();
		
		// Collect Form Data
		var formData = {
			type: $('form.product select[name="type"]').val(),
			size: $('form.product select[name="size"]').val(),
			color: $('form.product select[name="color"]').val()
		};

		// Add Mode (Create User)
		if(!this.editMode) {

			// Only set the image on add mode
			switch (formData.type) {
				case "skate":
					formData.img = '/images/SkateShoes.jpg';
					break;
				case "dress":
					formData.img = '/images/Dress.jpg';
					break;
				case "casual":
					formData.img = '/images/Casual.jpg';
					break;
				case "sandal":
					formData.img = '/images/Sandals.jpg';
					break;
				case "basketball":
					formData.img = '/images/Basketball-Shoes.jpg';
					break;
				default:
					console.log('Sorry, we do not have that product');
			}

			App.Collections.shoe.create(formData, {
				success: function (shoe) {
					App.router.navigate('/shoes', { trigger: true });
				}
			});

		// Edit Mode (Update User)
		} else {
			this.product.set(formData);
			this.product.save().done(function () {
				App.router.navigate('/shoes', { trigger: true});
			});
		}
	}
});

module.exports = ProductFormView;