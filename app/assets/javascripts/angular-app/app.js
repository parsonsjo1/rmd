angular.module('reserveMyDriveway', [])
/*.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "index.html"
	});
})*/

.controller('MainCtrl', ['$scope', function($scope) {
	$scope.test = "Hello World!";

    //$scope.getRequest = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=323+100+s+provo&key=AIzaSyBFvd31bqUF5IMMHwlNE9Z9Evw601kWLOA"
    //api = "AIzaSyDnDpU-M3Q-PbPHM28AQIjZWa1dJQj4FUc";
	//$scope.date = "";
	//$scope.time = "";
	$scope.findDestination = function() {
		console.log($scope.destination);
	};


}]);

/*.controller('MapCtrl', ['$scope', function($scope) {
		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

}]);*/