(function () {
    'use strict';

    angular.module(appName)
        .factory('weaponModel', function () {
		    var self = this;

			// Fields
            self.attacks = [];

			// Ctor
		    (function init() {
			    self.attacks.push({
				    name: 'Example',
				    attack: '+3',
				    damage: '1d6',
				    range: 3,
				    ammo: null,
				    weight: 0
			    });
		    })();

			// Methods
			self.exportData = function() {
				return {
					attacks: self.attacks
				}
			}

			self.importData = function(data) {
				self.attacks = data.atatcks;
			}

		    return self;
	    });
})();