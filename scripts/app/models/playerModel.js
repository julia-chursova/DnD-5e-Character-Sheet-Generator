(function () {
    'use strict';

    angular.module(appName)
        .factory('playerModel', function () {
            var self = this;

            self.init = function () {
                self.name = '';
                self.campaign = '';
                self.XP = '';
            }

            self.init();

            // Methods
			self.exportData = function() {
				return {
					name: self.name,
					campaign: self.campaign,
					XP: self.XP
				}
			}

			self.importData = function(data) {
			    self.name = data.name;
			    self.campaign = data.campaign;
			    self.XP = data.XP;
		    }

		    return self;
        });
})();