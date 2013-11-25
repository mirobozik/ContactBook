/**
 * Created by Miro on 23.11.2013.
 */
define(['modules/app', 'services/contactService', 'factories/TempData', 'factories/Contact'], function(app){
	app.controller('WizardStepOne', ['$scope','$state','contactService', 'TempData', 'Contact', function ($scope, $state, contactService, TempData, Contact) {

		var contact = TempData.get('tempContact') == undefined ? new Contact() : TempData.get('tempContact');
		$scope.firstname = contact.firstname;
		$scope.lastname = contact.lastname;
		$scope.mobil = contact.mobil;
		$scope.phone = contact.phone;
		$scope.email = contact.email;

		$scope.nextStep = function(){

			contact.id = contactService.getLastId() + 1;
			contact.firstname = $scope.firstname;
			contact.lastname = $scope.lastname;
			contact.mobil = $scope.mobil;
			contact.phone = $scope.phone;
			contact.email = $scope.email;

			TempData.set('tempContact', contact);

			//console.log(TempData.get('tempContact'));

			$state.transitionTo('create-contact.step-two');
		};

		$scope.cancelCreationContact = function(){

			TempData.remove('tempContact');

			$state.transitionTo('home');
		}
	}]);
});