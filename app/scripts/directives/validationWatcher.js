/**
 * Created by Miro on 27.11.2013.
 */
define(['angular'], function(angular){
	angular.module('app.directives',[]).
	directive('ngValidationWatcher', ['$rootScope', function($rootScope){
		return {
			require: ['?form'],
			restrict: 'A',
			link: function(scope, element, attr, ctrl){
				scope.$watch(attr.name + '.$valid', function(isValid, lastValue) {
					$rootScope.$broadcast('stepValidation', {
						isValid: isValid,
						lastValue: lastValue,
						formName: attr.name
					});
				});
			}
		};
	}]);

});