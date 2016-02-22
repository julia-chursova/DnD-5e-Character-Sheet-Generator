(function () {
    'use strict';

	angular.module(appName)
		.factory('languagesModel', function () {
			var self = this;

			// Constants
			var maxLanguages = 7;

	        self.init = function () {
	            self.languages = [];

	            for (var i = 0; i < maxLanguages; i++) {
	                self.languages.push('');
	            }
	        }

	        self.init();

	        // Methods
			self.exportData = function() {
				return {
					languages: self.languages
				}
			}

			self.importData = function(data) {
				self.languages = data.languages;
			}

			return self;
		});
})();