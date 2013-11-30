/**
 * Created by Miro on 26.11.2013.
 */
define(['angular', 'ui-router', 'modules/app'], function(angular, uiRouter, app){
	/* Wizard class */
	app.factory('Wizard', ['$state', function($state){
		function Wizard(title){
			var self = this;
			self.title = title;
			self.steps = [];
			self.currentStepIndex = -1;
			self.currentStep = undefined;
		}

		Wizard.prototype = {
			addStep: function(/* WizardStep */step){
				if(step == undefined){
					return;
				}
				step.url = $state.href(step.stateName);
				this.steps.push(step);
			},

			isCurrentStepLast: function(){
				if(this.currentStepIndex == -1 || this.steps.length==0){
					return false;
				}
				return this.currentStepIndex == (this.steps.length - 1);
			},

			isCurrentStepFirst: function(){
				if(this.currentStepIndex == -1 || this.steps.length==0){
					return false;
				}
				return this.currentStepIndex == 0;
			},

			changeStep: function(stateName, initCallback){
				var currentStateName = stateName;
				var self = this;
				angular.forEach(this.steps, function(val, key){
					if(val.stateName==currentStateName){
						self.currentStepIndex = key;
						self.currentStep = val;
					}
				});
				if(initCallback){
					initCallback(self.currentStep);
				}
			},

			removeStep: function(stepIndex){
				if(stepIndex < 0){
					return;
				}
				this.steps.splice(stepIndex,1);
			},

			isValid: function(){
				var isValid = true;
				angular.forEach(this.steps, function(val, key){
					if(!val.isValid){
						isValid = false;
					}
				});
				return isValid;
			},

			getSteps: function(){
				return this.steps;
			},

			getStep: function(index){
				if(index < 0 || index >= this.steps.length){
					return undefined;
				}
				return this.steps[index];
			},

			getNextStep: function(){
				return this.getStep(this.currentStepIndex + 1);
			},

			getCurrentStep: function(){
				if(!this.currentStep){
					this.currentStep = this.getStep(this.currentStepIndex);
				}
				return this.currentStep;
			},

			getPreviousStep: function(){
				return this.getStep(this.currentStepIndex - 1);
			},

			clearData: function(){
				angular.forEach(this.steps, function(val, key){
					var dd = angular.copy(val.defaultData);
					val.data = dd;//angular.copy(dd);
					val.isValid = false;
				});
			},

			clearNextSteps: function(){
				var cs = this.currentStep;
				angular.forEach(this.steps, function(val, key){
					if(cs && key > cs.index){
						var dd = angular.copy(val.defaultData);
						val.data = dd;//angular.copy(dd);
						val.isValid = false;
					}
				});
			}
		};

		return Wizard;
	}]);
	/* WizardStep class */
	app.factory('WizardStep', ['Wizard', function(Wizard){
		var WizardStep = function(){
			var self = this;
			self.index = -1; // step order
			self.title = '';
			self.description = '';
			self.stateName = '';
			self.url = '#';
			self.data = {};
			self.isValid = false;
			self.defaultData = {};
		}
		return WizardStep;
	}]);
});