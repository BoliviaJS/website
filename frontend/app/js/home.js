angular.module('demoApp.home',[])

.controller('HomeController', ["$scope","Home", function($scope, Home){
    angular.extend($scope, Home);

	
	
}]).factory('Home', function($http){
	




	return {
		
	}



});
