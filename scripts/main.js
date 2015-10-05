'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
Parse.initialize("SMxDXFDMZo8twthOB1IPYisgT9RrS5Kca4z0TV3y","dyJGje0lS5wVilTmmO5fCR75I9VgqCs1BCKuxIWr");
var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var DashboardComponent = require('./components/DashboardComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');
var app = document.getElementById('app');

React.render(
	<NavigationComponent />,
	document.getElementById('nav')
);

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'login': 'login',
		'register': 'register',
		'logout': 'logout'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	dashboard: function() {
		if(Parse.User.current() === null){
			r.navigate('login',{trigger: true})
		}else{
			React.render(<DashboardComponent />, app);
		}
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	},
	logout: function(){
		Parse.User.logOut();
		r.navigate('', {trigger: true})
	}
});

var r = new Router();
Backbone.history.start();
