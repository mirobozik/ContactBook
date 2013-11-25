/**
 * Created by Miro on 23.11.2013.
 */
define([
	'angular',
	'modules/app',
	'states',
	'controllers/HomeCtrl',
	'controllers/CreateContact',
	'controllers/WizardStepOne',
	'controllers/WizardStepTwo',
	'controllers/WizardStepThree'],
	function(angular, app, states){
		return app.config(['$stateProvider', function ($stateProvider) {
			angular.forEach(states, function(val, key){
				$stateProvider.state(val);
			});
		}])
		.run(['$state', function ($state) {
			$state.transitionTo('home');
		}]);
})