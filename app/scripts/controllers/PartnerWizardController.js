/**
 * Created by Miro on 25.11.2013.
 */
define(['modules/app', 'ui-router', 'factories/PartnerWizard', 'services/PartnerService'], function(app){
	app.controller('PartnerWizardController',['$scope','$state', 'partnerWizard', 'PartnerService', function($scope, $state, partnerWizard, partnerService){

		$scope.currentStep = {};
		$scope.previousStep = {};
		$scope.partnerWizard = {};

		$scope.$on('$stateChangeSuccess', function(evt, toState, toParams, fromState, fromParams) {
			evt.preventDefault();

			//Change to next step after state has been changed.
			partnerWizard.changeStep(toState.name);

			//Check previous step validation
			var previousStep = partnerWizard.getPreviousStep();
			if(previousStep && !previousStep.isValid){
				$state.transitionTo(previousStep.stateName);
				return;
			}

			$scope.partnerWizard = partnerWizard;
			$scope.currentStep = partnerWizard.currentStep;
			$scope.previousStep = previousStep;

			//TODO change it..
			if(!partnerWizard.isCurrentStepFirst() && previousStep){
				$scope.showCompanyData = previousStep.data.contactType === 'company';
			}
			if(partnerWizard.isCurrentStepLast()){
				$scope.currentStep.isValid = true; //this step is only summary of data
				$scope.contact = partnerService.createFromWizard(partnerWizard);
			}
		});

		//Step validation event from directive 'validation-watcher'
		$scope.$on('stepValidation', function(event, validity){
			$scope.currentStep.isValid = validity.isValid;
			if(!validity.isValid){
				partnerWizard.clearNextSteps();
			}
		});

		//Go to back to previous wizard step
		$scope.back = function(){
			if(!partnerWizard.isCurrentStepFirst() && $scope.previousStep){
				$state.transitionTo($scope.previousStep.stateName);
			}
		};

		//Got to next wizard step
		$scope.next = function(){
			if($scope.currentStep && $scope.currentStep.isValid){
				var nextStep = partnerWizard.getNextStep();
				$scope.currentStep = nextStep;
				$state.transitionTo(nextStep.stateName);
			}
		};

		//Cancel wizard
		$scope.cancel = function(){
			partnerWizard.clearData();
			//delete partnerWizard;
			$state.transitionTo('home');
		};

		//Submit data from wizard 'Create Partner'
		$scope.submit = function(){
			if(partnerWizard.isValid()){
				partnerService.addPartner($scope.contact);
				partnerWizard.clearData();
				//delete partnerWizard;
				$state.transitionTo('home');
			}
		};

	}]);
})