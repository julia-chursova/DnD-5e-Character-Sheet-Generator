(function () {
    'use strict';

    angular.module(appName)
        .factory('abilitiesModel', [
            function () {
                var self = this;

                // Init contains BOTH definition of fields and initialization for them
                self.init = function() {
                    self.abilities = [];

                    var maxAbilities = 10;

                    for (var i = 0; i < maxAbilities; i++)
                        self.abilities.push(null);
                }

                self.init();

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