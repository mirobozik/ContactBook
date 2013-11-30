/**
 * PartnerService for manipulating of Contact data object
 * Created by Miro on 25.11.2013.
 */
define(['angular','modules/app', 'factories/Partner'],function(angular, app){
	return app.service('PartnerService', ['Partner', function(Partner){
		var self = this;
		self.partners = [];
		self.lastId = 0;

		self.addPartner = function(partner){
			if(partner === undefined){
				return;
			}
			self.lastId += 1;
			partner.id = self.lastId;
			self.partners.push(partner);
		};

		self.deletePartner = function(id){
			angular.forEach(self.partners, function(val, key){
				if(val.id===id){
					delete self.partners[key];
					self.partners.splice(key, 1);
				}
			});
		};

		self.getPartners = function(){
			return self.partners;
		};

		self.getPartner = function(partnerId){
			angular.forEach(self.partners, function(val, key){
				if(val.id===partnerId){
					return val;
				}
			});
		};

		self.createFromWizard = function(/* PartnerWizard */ partnerWizard){
			var partner = new Partner();

			var stepOne = partnerWizard.getStep(0);
			var stepTwo = partnerWizard.getStep(1);
			partner.email = stepOne.data.email;
			if(stepOne.data.contactType==='company'){
				partner.companyName = stepOne.data.companyName;
				partner.regNr = stepTwo.data.regNr;
				partner.vatNumber = stepTwo.data.vatNumber;
				partner.dic = stepTwo.data.dic;
				partner.contact = {
					firstName: stepTwo.data.contactFirstName,
					lastName: stepTwo.data.contactLastName,
					email: stepTwo.data.contactEmail,
					phone: stepTwo.data.contactPhone,
					mobile: stepTwo.data.contactMobile,
					fax: stepTwo.data.contactFax
				};
			}else{
				partner.firstName = stepOne.data.firstName;
				partner.lastName = stepOne.data.lastName;
				partner.facebook = stepTwo.data.facebook;
				partner.birthday = stepTwo.data.birthday;
				partner.googlePlus = stepTwo.data.googlePlus;
			}
			partner.email = stepOne.data.email;
			partner.phone = stepOne.data.phone;
			partner.mobile = stepOne.data.mobile;
			partner.fax = stepOne.data.fax;
			partner.web = stepOne.data.web;
			partner.address = {
				street: stepTwo.data.address.street,
				postalCode: stepTwo.data.address.postalCode,
				city: stepTwo.data.address.city,
				country: stepTwo.data.address.country
			};
			return partner;
		};

		return {
			addPartner: self.addPartner,
			deletePartner: self.deletePartner,
			getPartner: self.getPartner,
			getPartners: self.getPartners,
			createFromWizard: self.createFromWizard
		}
	}]);
})