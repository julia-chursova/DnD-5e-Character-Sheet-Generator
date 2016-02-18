﻿(function () {
	'use strict';

	angular.module(appName)
		.factory('moneyModel', [
			function () {
				var self = this;

			    self.init = function () {
			        self.copper = '';
			        self.silver = '';
			        self.electrum = '';
			        self.gold = '';
			        self.platinum = '';
			    }

			    self.init();

			    // Calculable fields
				self.total = function () {
					return (self.copper || 0) +
						(self.silver || 0) * 10 +
						(self.electrum || 0) * 50 +
						(self.gold || 0) * 100 +
						(self.platinum || 0) * 1000;
				}

				// Methods
				self.exportData = function() {
					return {
						copper: self.copper,
						silver: self.silver,
						electrum: self.electrum,
						gold: self.gold,
						platinum: self.platinum
					}
				}

				self.importData = function(data) {
					self.copper = data.copper;
					self.silver = data.silver;
					self.electrum = data.electrum;
					self.gold = data.gold;
					self.platinum = data.platinum;
				}

				return self;
			}
		]);
})();