/**
 * Contact data object
 * Created by Miro on 25.11.2013.
 */
define(['modules/app'], function(app){
	app.factory('Partner', function(){

		var Partner = function(){
			this.id = 0;

			this.email = '',
			this.companyName = '',
			this.firstName = '',
			this.lastName = '',
			this.phone = '',
			this.mobile = '',
			this.web = ''

			this.birthday = '',
			this.facebook = '',
			this.googlePlus = '',

			this.regNr = '',
			this.vatNumber = '',
			this.dic = '',

			this.address = {
				street: '',
				postalCode: '',
				city: '',
				country: ''
			},

			this.contact = {
				firstName: '',
				lastName:'',
				email: '',
				phone: '',
				mobile: '',
				fax: ''
			}
		};

		return Partner;
	});
});