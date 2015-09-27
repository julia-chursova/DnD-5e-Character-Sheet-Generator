﻿(function() {
	'use strict';

	angular.module(appName)
		.factory('spellcastingModel', function() {
			var self = this;

			// Fields
			self.spells = [];

			// Ctor
			(function init() {
				var maxSpellLevel = 9;
				for (var i = 0; i <= maxSpellLevel; i++) {
					self.spells.push({
					    remaining: 0,
					    maxPerDay: 0,
                        knownCount: 0,
                        spells: []
					});
				}
			})();

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