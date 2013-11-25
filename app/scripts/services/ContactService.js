/**
 * Created by Miro on 25.11.2013.
 */
define(['angular','modules/app'],function(angular, app){
	return app.service('contactService', function(){
		var self = this;
		self.tempContact = null;
		self.contacts = [];
		self.lastId = 0;
		self.getLastId = function(){
			return self.lastId;
		};

		self.addContact = function(contact){
			if(contact == undefined){
				return;
			}
			if(contact.id == self.tempContact.id){
				self.tempContact = null;
			}
			self.contacts.push(contact);
			self.lastId = contact.id;
		};

		self.deleteContact = function(id){
			angular.forEach(self.contacts, function(key, val){
				if(val.id==id){
					self.contacts.remove(key);
				}
			});
		};

		self.getContacts = function(){
			return self.contacts;
		};

		self.getTempContact = function(){
			if(self.tempContact==null){
				self.tempContact = {};
			}
			return self.tempContact;
		}

		self.setTempContact = function(tempContact){
			self.tempContact = tempContact;
		}

		return {
			addContact: self.addContact,
			deleteContact: self.deleteContact,
			getContacts: self.getContacts,
			getTempContact: self.getTempContact,
			setTempContact: self.setTempContact,
			getLastId: self.getLastId
		}
	});
})