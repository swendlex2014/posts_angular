(function(app) {
    var configuration = function($routeProvider, $locationProvider){
        $routeProvider
        .when('/:ID', { templateUrl: 'pages/_home.html', })
        .when('/post/:ID', { templateUrl: 'pages/_entry.html', })        
        .otherwise({ redirectTo: '/1' });
        $locationProvider.html5Mode(true);
    }
    app.config(['$routeProvider', '$locationProvider', configuration]); 
})(angular.module('wsapp'));