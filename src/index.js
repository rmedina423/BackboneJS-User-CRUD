var Backbone = require('backbone');

// App
var App = require('./app');
var userCollection = require('./collections/user');
var shoeCollection = require('./collections/shoe');

// View: Form
var UserFormView = require('./views/user-form');
var ProductFormView = require('./views/shoe-form')
App.Views.UserForm = new UserFormView;
App.Views.ProductFormView = new ProductFormView

// View: List Users
var ListUsersView = require('./views/list-users');
App.Views.ListUsers  = new ListUsersView;


// View: List Products
var ListProductsView = require('./views/list-products');
App.Views.ListProducts = new ListProductsView;

// App Router
App.Router = Backbone.Router.extend({

  // Route definitions
  routes: {
    '': 'index',
    'user/add(/)': 'addUser',
    'user/:id/edit(/)': 'addUser',
    'user/:id/delete(/)': 'deleteUser',
    'shoes(/)': 'listProducts',
    'shoes/add(/)': 'addShoe',
    'shoes/:id/edit(/)': 'addShoe',
    'shoes/:id/delete(/)': 'deleteProduct',
    '*actions': 'defaultRoute'
  },

  // Route handlers

  index: function() {
    App.Views.ListUsers.render();
  },

  addUser: function(id) {
    App.Views.UserForm.render(id);
  },

  deleteUser: function(id) {
    var user = userCollection.get(id);

    user.destroy().done(function (user) {
      App.router.navigate('/', { trigger: true })
    });
  },

  listProducts: function() {
    App.Views.ListProducts.render()
  },

  addShoe: function(id) {
    App.Views.ProductFormView.render(id);
  },

  deleteProduct: function(id) {
    var product = shoeCollection.get(id);
    console.log(product)

    product.destroy().done(function (product) {
      App.router.navigate('/', { trigger: true })
    })
  },

  defaultRoute: function(actions) {
    console.log('404');
  }
});

// Initiate the router
App.router = new App.Router;

Backbone.history.start();
