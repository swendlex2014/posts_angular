(function(app) {
	var postsCtrl = function($scope, dataServ, $routeParams){
		dataServ.getServData('postall', $routeParams.ID).then(function(data){
			$scope.entries = data;
		})
	};

	app.controller('postsCtrl', ['$scope', 'dataServ', '$routeParams', postsCtrl]);

})(angular.module('wsapp'));
