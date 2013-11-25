/**
 * Created by Miro on 23.11.2013.
 */
define(function(){
	return [
		{
			name: 'home',
			url: '/',
			controller: 'HomeCtrl',
			templateUrl: 'templates/home.html'
		},
		{
			name: 'about',
			url: '/about',
			templateUrl: 'templates/about.html'
		},
		{
			name: 'create-contact',
			url: '/create-contact',
			controller: 'CreateContact',
			templateUrl: 'templates/create-contact.html'
		},
		{
			name: 'create-contact.step-one',
			url: '/step-one',
			controller: 'WizardStepOne',
			templateUrl: 'templates/wizard/wizard-step-one.html'
		},
		{
			name: 'create-contact.step-two',
			url: '/step-two',
			controller: 'WizardStepTwo',
			templateUrl: 'templates/wizard/wizard-step-two.html'
		},
		{
			name: 'create-contact.summary',
			url: '/summary',
			controller: 'WizardStepThree',
			templateUrl: 'templates/wizard/wizard-step-three.html'
		}
	];
});