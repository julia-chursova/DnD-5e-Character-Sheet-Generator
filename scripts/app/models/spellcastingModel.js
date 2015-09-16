(function() {
	'use strict';

	angular.module(appName)
		.factory('spellcastingModel', function() {
			var self = this;

			self.spells = [];

			(function init() {
				var maxSpellLevel = 9;
				for (var i = 0; i <= maxSpellLevel; i++) {
					self.spells.push([]);
				}
			})();

			return self;
		});
})();