(function () {
    'use strict';

    angular.module(appName)
        .factory('abilitiesModel', [
            function () {
                var self = this;

                // Fields
                self.abilities = [];

                // Ctor
                (function () {
                    var maxAbilities = 10;

                    for (var i = 0; i < maxAbilities; i++)
                        self.abilities.push(null);
                })();

                // Methods
                self.exportData = function () {
                    return {
                        abilities: self.abilities
                    }
                }

                self.importData = function (data) {
                    self.abilities = data.abilities;
                }

                return self;
            }
        ]);
})();