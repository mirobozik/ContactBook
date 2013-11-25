/**
 * Created by Miro on 23.11.2013.
 */
define(['modules/app'], function(app){
	app.controller('HomeCtrl', ['$scope', function ($scope) {
		$scope.you;
		$scope.message = "Hello :)";
	}]);
});