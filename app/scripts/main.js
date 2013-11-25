require.config({
	baseUrl: "scripts/",
	paths: {
		'angular': 'vendor/angular/angular',
		'ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
		'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
		'jQuery': 'vendor/jquery/jquery'
	},
	shim: {
		'jQuery': { exports: 'jQuery' },
		'angular': { exports: 'angular' },
		'ui-router': { deps: ['angular']},
        'bootstrap': { deps: ['jQuery'] }
	}
});

require(['angular','jQuery','routes'], function (angular, jQuery) {
	jQuery(function(){
		angular.bootstrap(document, ['app']);
	});
});