# BackboneJS User CRUD

This project will get you familiar with CRUD and MVC. CRUD stands for Create, Retrieve, Update, and Delete. Every "entity" in an information system is usually subject to these four processes. This project already has a full user CRUD built in. In other words, all the code for creating, retrieving, updating, and deleting users is already done. This will allow you to learn by example -one of the best ways to learn new frameworks.

Speaking of frameworks, the Backbone framework you'll be using is an MVC framework which means it breaks code down into separate sections for Models, Views, and Controllers. 

> Technically it's not a traditional MVC because it doesn't have the usual "C" (Controller), but that's besides the point.

## MVC vs CRUD

So how to these two complex acronyms work together? Think of it this way, MVC is a way to organize the code into different purposes. CRUD just means that we need to be able to fully edit our data. So lets take "users" for instance - not the users who visit the site per-se, but rather the users that are saved in the database. You'll need to add users right? That's obviously the "C" part of CRUD. So how do you add users? You'll probably need a form right? Well forms are made of HTML and in the MVC pattern of organizing code, anything that the user sees (the UI) is a "View". Then you'll need a URL path to visit to see the form right? Let's say it's `example.com/user/add`. When the website user visits this path, the router (a part of the MVC framework) will see that you're visiting the `/user/add` and will load the correct view (remember the form is the view). Then when the form is submitted, you'll need to save the form fields to the database right? Well that's where models come in. A Model in MVC is the piece of code that organizes database input and output.

So where's the "C" for MVC? Well, Backbone doesn't have a traditional Controller concept so we'll just ignore the meaning of controllers for now.

Let's break down the code a little more for the `user` entity.

- **Models** For each table (entity) in the database, we typically need one Model. Think of the model as an object where. So for creating users, deleting users, updating users etc... we'll use one model for that. But if we have another entity in the database like "products", then we'll have another model for products

- **Views** Since views are the HTML portions of each the CRUD parts, we'll likely need one view for adding users, another for listing users (retrieving users), etc.

## Your Task

Your task is to study how the user CRUD was built and to develop another entity for products. You'll start by creating a products "table" in the "JSON-Server" database. You can pick any product fields you want. Then you'll create the ability to list, create, update, and delete products. Don't override the user crud code. In fact, don't edit it at all. The end result of your system should have users and products together.

You'll also need to make your own special user interface. The existing one is pretty lame. Create that separately from the Backbone code and when it's looking nice, introduce it into the code base.

Have fun.