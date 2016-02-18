(function() {
	'use strict';

	angular.module(appName)
		.factory('spellcastingModel', function() {
			var self = this;

			self.init = function () {
			    self.spells = [];

	            var maxSpellLevel = 9;
	            var maxSpellsInGroup = 6;

	            for (var i = 0; i <= maxSpellLevel; i++) {
	                var spells = [];
	                for (var spellInd = 0; spellInd < maxSpellsInGroup; spellInd++) {
	                    spells.push({});
	                }

	                self.spells.push({
	                    remaining: 0,
	                    maxPerDay: 0,
	                    knownCount: 0,
	                    spells: spells
	                });
	            }
			}

	        self.init();

	        // Methods
			self.exportData = function() {
				return {
					spells: self.spells
				}
			}

			self.importData = function(data) {
				self.spells = data.spells;
			}

			return self;
		});
})();