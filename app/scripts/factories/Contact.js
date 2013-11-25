/**
 * Created by Miro on 25.11.2013.
 */
define(['modules/app'], function(app){
	app.factory('Contact', function(){
		var Contact = function(){
			return {
				id: '',
				firstname: '',
				lastname: '',
				email: '',
				mobil: '',
				phone: ''
			};
		};

		return Contact;
	});
});