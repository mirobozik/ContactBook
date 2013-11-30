/**
 * TempData object for sharing temporary data in controllers
 * Created by Miro on 25.11.2013.
 */
define(['angular','modules/app'], function(angular, app){
	app.factory('TempData', function(){
		var TempData = function() {
			var self = this;
			self.items = {};

			self.set = function(key, val){
				self.items[key] = val;
			};

			self.remove = function(akey){
				self.items[akey] = undefined;
			};

			self.get = function(key){
				return self.items[key];
			};

			return {
				set: self.set,
				remove: self.remove,
				get: self.get
			}
		};

		return new TempData();
	});
});