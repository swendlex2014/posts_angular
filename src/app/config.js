(function(app) {
    var configuration = function($routeProvider, $locationProvider){
        $routeProvider
        .when('/entry/:ID', { templateUrl: 'pages/_home.html', })      
        .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
    }
    app.config(['$routeProvider', '$locationProvider', configuration]); 
})(angular.module('wsapp'));