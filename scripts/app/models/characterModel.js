(function () {
    'use strict';

    angular.module(appName)
        .factory('characterModel', [
            'statsModel',
            'featsModel',
			'raceModel',
            function (statsModel, featsModel, raceModel) {
            	var self = this;

            	var maxClasses = 5;

                // Fields
                self.raceModel = raceModel;
                self.name = '';
                self.alignment = 5;
                self.isMale = true;

                self.classes = [];

				for (var i = 0; i < maxClasses; i++) {
					self.classes.push({
						"class": null,
						specialization: null,
						level: ''
					});
				}

                self.proficiencyBonus = function() {
	                return 1 + Math.ceil(self.effectiveLevel() / 4);
                };

                self.initiativeBonus = 0;

                // Calculated properties
                self.effectiveLevel = function () {
                    var result = 0;

	                for (var i = 0; i < self.classes.length; i++)
		                result += (self.classes[i].level || 0);

                    return result;
                };

                self.initiative = function () {
                    var result = statsModel.dexModifier() + self.initiativeBonus;

                    if (featsModel.haveAlertFeat())
                        result += 5;

                    return result;
                };

                // Methods
                self.removeClass = function (characterClass) {
                    self.classes.remove(characterClass);
                };

                return self;
            }]);
})();