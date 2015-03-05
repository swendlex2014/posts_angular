(function(app) {
 var entryCtrl = function($scope, dataServ, $routeParams){
 	dataServ.getServData('postone', $routeParams.ID).then(function(data){
 		$scope.link = window.location.href;
 		$scope.entry = data;
 	})
 };
 
 app.controller('entryCtrl', ['$scope', 'dataServ', '$routeParams', entryCtrl]);
 
 })(angular.module('wsapp'));
