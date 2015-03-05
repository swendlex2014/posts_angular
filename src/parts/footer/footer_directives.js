(function(app) {
 var wsFooter = function(){
 return {
 restrict: 'AE',
 controller : 'footerCtrl',
 templateUrl : 'pages/footer.html'
 };
 };
 
 app.directive('wsFooter', wsFooter);
 
 })(angular.module('wsapp'));
 