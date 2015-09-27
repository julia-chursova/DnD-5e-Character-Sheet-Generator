(function () {
	'use strict';

	angular.module(appName)
		.factory('hitPointsModel', [
            'characterModel',
            'raceModel',
            'helpers',

			function (characterModel, raceModel, helpers) {
				var self = this;

                // Fields
				self.baseHitPoints = '';
				self.userDefinedBonus = '';
				self.currentHitPoints = '';

			    // Calculable Properties
				self.hitPointsBonus = function () {
				    return helpers.isInteger(self.userDefinedBonus)
                        ? self.userDefinedBonus
                        : (raceModel.race && raceModel.race.hpBonus ? raceModel.race.hpBonus(characterModel.effectiveLevel()) : 0);
                }

				self.maxHitPoints = function () {
				    return (self.baseHitPoints || 0) + (self.hitPointsBonus() || 0);
				}

                self.bonusDefined = function() {
                    return (raceModel.race && raceModel.race.hpBonus) || helpers.isInteger(self.userDefinedBonus);
                }

				// Methods
				self.exportData = function() {
					return {
						baseHitPoints: self.baseHitPoints,
						userDefinedBonus: self.userDefinedBonus,
					    currentHitPoints: self.currentHitPoints
					}
				}

				self.importData = function(data) {
					self.baseHitPoints = data.baseHitPoints;
					self.userDefinedBonus = data.userDefinedBonus;
				    self.currentHitPoints = data.currentHitPoints;
				}

				return self;
			}
		]);
})();