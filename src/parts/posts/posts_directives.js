(function(app) {
 var wsPosts = function(){
 return {
 restrict: 'AE',
 controller : 'postsCtrl',
 templateUrl : 'pages/posts.html'
 };
 };
 
 app.directive('wsPosts', wsPosts);
 
 })(angular.module('wsapp'));
 