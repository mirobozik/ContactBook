/**
 * Created by Miro on 26.11.2013.
 */
define(['angular','modules/app','factories/Wizard'], function(angular, app){
	app.factory('partnerWizard', ['Wizard', 'WizardStep', function(Wizard, WizardStep){

		var contactWizard = new Wizard('Contact Wizard');

		var stepOne = new WizardStep();
		stepOne.index = 0;
		stepOne.title = 'Step 1.';
		stepOne.description = 'Enter basic information about contact, etc: email, firstname, lastname or company name';
		stepOne.stateName = 'create-partner.step-one';
		var stepOneData = {
			email: '',
			contactType: 'person',// person | company
			companyName: '',
			firstName: '',
			lastName: '',
			phone: '',
			mobile: '',
			web: ''
		};
		stepOne.defaultData = angular.copy(stepOneData);
		stepOne.data = angular.copy(stepOneData);
		contactWizard.addStep(stepOne);

		var stepTwo = new WizardStep();
		stepTwo.index = 1;
		stepTwo.title = 'Step 2.';
		stepTwo.description = 'Additional information about person or company..';
		stepTwo.stateName = 'create-partner.step-two';
		var stepTwoData = {
			birthday: '',
			facebook: '',
			googlePlus: '',
			regNr: '',
			vatNumber: '',
			dic: '',
			address: { street: '', postalCode: '', city: '', country: ''},
			contactFirstName: '',
			contactLastName: '',
			contactEmail: '',
			contactPhone: '',
			contactMobile: '',
			contactFax: ''
		};
		stepTwo.defaultData = angular.copy(stepTwoData);
		stepTwo.data = angular.copy(stepTwoData);
		contactWizard.addStep(stepTwo);

		var stepSummary = new WizardStep();
		stepSummary.index = 2;
		stepSummary.title = 'Summary';
		stepSummary.description = 'Summary of new contact';
		stepSummary.stateName = 'create-partner.summary';
		stepSummary.data = {};
		stepSummary.defaultData = {};
		contactWizard.addStep(stepSummary);

		return contactWizard;

	}]);
});