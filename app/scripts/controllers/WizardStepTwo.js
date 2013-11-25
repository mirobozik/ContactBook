/**
 * Created by Miro on 23.11.2013.
 */
define(['modules/app', 'services/contactService', 'factories/TempData', 'factories/Contact'], function(app){
	app.controller('WizardStepTwo', ['$scope', '$state', 'contactService','TempData','Contact', function ($scope, $state, contactService, TempData, Contact) {

		var contact = TempData.get('tempContact') == undefined ? new Contact() : TempData.get('tempContact');

		$scope.firstname = contact.firstname;
		$scope.lastname = contact.lastname;


		$scope.previousStep = function(){
			$state.transitionTo('wizard-step-one');
		};

		$scope.nextStep = function(){

			TempData.set('tempContact', contact);
			$state.transitionTo('wizard-step-three');
		};

		$scope.cancelCreationContact = function(){

			TempData.remove('tempContact');
			$state.transitionTo('home');
		}
	}]);
});