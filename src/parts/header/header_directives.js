(function(app) {
 var wsHeader = function(){
 return {
 restrict: 'AE',
 controller : 'headerCtrl',
 templateUrl : 'pages/header.html'
 };
 };
 
 app.directive('wsHeader', wsHeader);
 
 })(angular.module('wsapp'));
 