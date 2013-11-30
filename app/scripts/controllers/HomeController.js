/**
 * Created by Miro on 23.11.2013.
 */
define(['modules/app', 'services/PartnerService'], function(app){
	app.controller('HomeController', ['$scope', 'PartnerService', function ($scope, partnerService) {

		$scope.contacts = partnerService.getPartners();

		$scope.deleteItem = function(contact){
			partnerService.deletePartner(contact.id);
		}
	}]);
});