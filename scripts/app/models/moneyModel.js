(function () {
	'use strict';

	angular.module(appName)
		.factory('moneyModel', [
			function () {
				var self = this;

				self.copper = '';
				self.silver = '';
				self.electrum = '';
				self.gold = '';
				self.platinum = '';

				self.total = function () {
					return (self.copper || 0) +
						(self.silver || 0) * 10 +
						(self.electrum || 0) * 50 +
						(self.gold || 0) * 100 +
						(self.platinum || 0) * 1000;
				}

				return self;
			}
		]);
})();