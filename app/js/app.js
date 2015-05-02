var demoApp =  angular.module('demoApp',['ui.router', 'demoApp.home','demoApp.events'])


.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/home");

	$stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "views/home.html",
	      controller: 'HomeController'
	    })
	    .state('events', {
	      url: "/events",
	      templateUrl: "views/events.html",
	      controller: 'EventsController'
	    })
	   

});