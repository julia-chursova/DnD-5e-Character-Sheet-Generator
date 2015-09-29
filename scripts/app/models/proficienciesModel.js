﻿(function () {
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

				// Computed properties
				self.proficientWithArmor = function (armorType) {
					return self.armor[armorType];
				}

				// Methods
				self.exportData = function () {
					return {

					}
				}

				self.importData = function (data) {

				}

				return self;
			}
		]);
})();