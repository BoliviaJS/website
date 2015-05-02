angular.module('demoApp.home',[])

.controller('HomeController', ["$scope","Home", function($scope, Home){
    angular.extend($scope, Home);

	$scope.mensaje = "Hola mundo!";

	$scope.llamar = function(){
		return Home.jalarEstudiantes();
	};


	$scope.lista = [ {nombre:"Riony", apellido:"Arroyo"}, {nombre:'Rene',apellido: "Gumiel"}, {nombre:'Evert', apellido: 'Alvarado'}];
	
}]).factory('Home', function($http){
	

	var jalarEstudiantes = function(){

		$http.get('http://localhost:3000/api/students')
		.success(function(respuesta){
			console.log(respuesta);
		}).error(function(error){
			console.log('se tiene un error ', error);
		});

	} 


	return {
		jalarEstudiantes: jalarEstudiantes
	}



});
