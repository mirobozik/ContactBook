/**
 * Created by Miro on 23.11.2013.
 */
define(function(){
	return [
		{
			name: 'home',
			url: '/',
			controller: 'HomeController',
			templateUrl: 'templates/home.html'
		},
		{
			name: 'about',
			url: '/about',
			templateUrl: 'templates/about.html'
		},
		{
			name: 'create-partner',
			url: '/create-partner',
			abstract: true,
			controller: 'PartnerWizardController',
			templateUrl: 'templates/partner-wizard.html'
		},
		{
			name: 'create-partner.step-one',
			url: '/step-one',
			templateUrl: 'templates/wizard/wizard-step-one.html'
		},
		{
			name: 'create-partner.step-two',
			url: '/step-two',
			templateUrl: 'templates/wizard/wizard-step-two.html'
		},
		{
			name: 'create-partner.summary',
			url: '/summary',
			templateUrl: 'templates/wizard/wizard-step-three.html'
		}
	];
});