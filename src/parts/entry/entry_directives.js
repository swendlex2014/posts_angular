(function(app) {
 var wsEntry = function(){
 return {
 restrict: 'AE',
 controller : 'entryCtrl',
 templateUrl : 'pages/entry.html'
 };
 };
 
 app.directive('wsEntry', wsEntry);
 
 })(angular.module('wsapp'));
 