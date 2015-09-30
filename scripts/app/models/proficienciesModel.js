(function () {
	'use strict';

	angular.module(appName)
		.factory('proficienciesModel', [
			function () {
				var self = this;

				// Fields
				self.weapons = {

				};

				self.armor = {

				};

				self.tools = [];

				self.shieldProficiency = false;

			    // Ctor
			    (function () {
			        var toolCount = 5;

			        for (var i = 0; i < toolCount; i++)
			            self.tools.push('');
			    })();

				// Computed properties
				self.proficientWithArmor = function (armorType) {
					return armorType && self.armor.hasOwnProperty(armorType) && self.armor[armorType];
				}

				// Methods
				self.exportData = function () {
					return {
					    weapons: self.weapons,
					    armor: self.armor,
                        tools: self.tools
					}
				}

				self.importData = function (data) {
				    self.weapons = data.weapons;
				    self.armor = data.armor;
				    self.tools = data.tools;
				}

				return self;
			}
		]);
})();