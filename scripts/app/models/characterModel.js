(function() {
    'use strict';

    angular.module(appName)
        .factory('characterModel', [
            'statsModel',
            'featsModel',
            'raceModel',
            'sizeProvider',

            function(statsModel, featsModel, raceModel, sizeProvider) {
                var self = this;

                var maxClasses = 5;

                // Fields
                self.raceModel = raceModel;
                self.name = '';
                self.alignment = 5;
                self.isMale = true;
                self.selectedSize = sizeProvider.defaultSize;
                self.background = null;

                self.classes = [];

                self.initiativeBonus = 0;

                // Constructor
                (function init() {
                    for (var i = 0; i < maxClasses; i++) {
                        self.classes.push({
                            "class": null,
                            specialization: null,
                            level: ''
                        });
                    }
                })();

                // Calculable properties
                self.effectiveLevel = function() {
                    var result = 0;

                    for (var i = 0; i < self.classes.length; i++)
                        result += (self.classes[i].level || 0);

                    return result;
                };

                self.initiative = function() {
                    var result = statsModel.dexModifier() + self.initiativeBonus;

                    if (featsModel.haveAlertFeat())
                        result += 5;

                    return result;
                };

                self.proficiencyBonus = function() {
                    return 1 + Math.ceil(self.effectiveLevel() / 4);
                };

                self.size = function() {
                    if (self.selectedSize && self.selectedSize !== sizeProvider.defaultSize)
                        return self.selectedSize;

                    if (self.raceModel.race && self.raceModel.race.size)
                        return self.raceModel.race.size;

                    return "";
                }

                // Methods
                self.removeClass = function(characterClass) {
                    self.classes.remove(characterClass);
                };

                self.exportData = function() {
                    return {
                        name: self.name,
                        alignment: self.alignment,
                        isMale: self.isMale,
                        background: self.background,
                        classes: self.classes,
                        initiativeBonus: self.initiativeBonus
                    }
                }

                self.importData = function(data) {
                    self.name = data.name;
                    self.alignment = data.alignment;
                    self.isMale = data.isMale;
                    self.background = data.background;
                    self.classes = data.classes;
                    self.initiativeBonus = data.initiativeBonus;
                }

                return self;
            }
        ]);
})();