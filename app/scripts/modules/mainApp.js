/**
 * Created by Miro on 23.11.2013.
 */
define(['angular', 'ui-router'], function (angular) {
	return angular.module('mainApp', ['ui.router'])
		.config(['$stateProvider',
			function ($stateProvider) {
				var home = {
					name: "home",
					url: "/",
					templateUrl: "templates/home.html"
				};
				$stateProvider.state(home);
			}])
		.run(['$state', function ($state) {
			$state.transitionTo('home');
		}]);
});