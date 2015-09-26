﻿(function () {
	'use strict';

	angular.module(appName)
		.factory('hitPointsModel', [
            'raceModel',
			function (raceModel) {
				var self = this;

				self.baseHitPoints = '';
				self.hitPointsBonus = '';

				self.maxHitPoints = function () {
					return (self.hitPointsBonus || 0) + (self.baseHitPoints || 0);
				}

			    self.currentHitPoints = '';

				// Methods
				self.exportData = function() {
					return {
						baseHitPoints: self.baseHitPoints,
						hitPointsBonus: self.hitPointsBonus
					}
				}

				self.importData = function(data) {
					self.baseHitPoints = data.baseHitPoints;
					self.hitPointsBonus = data.hitPointsBonus;
				}

				return self;
			}
		]);
})();