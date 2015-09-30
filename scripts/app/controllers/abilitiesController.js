(function() {
    'use strict';

    angular.module(appName)
        .controller('abilitiesController', [
            'abilitiesModel',
            'abilitiesProvider',

            function (abilitiesModel, abilitiesProvider) {
                var self = this;

                self.abilitiesModel = abilitiesModel;
                self.availableAbilities = abilitiesProvider;
            }
        ]);
})();