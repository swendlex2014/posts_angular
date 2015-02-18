(function(app) {
	var landingCtrl = function($scope, dataServ, $location){

		var index = window.location.pathname.lastIndexOf('/')
		var num = window.location.pathname.substring(index + 1);

		$scope.update = function(ID){
			$location.path('entry/' + ID);
			dataServ.getServData('posts/entry', ID).then(function(data){
				$scope.post = data;
				setTimeout(document.wsConfig.init, 200);
			});
		}

		$scope.update(num);
	};

	app.controller('landingCtrl', ['$scope','dataServ', '$location', landingCtrl]);

})(angular.module('wsapp'));
