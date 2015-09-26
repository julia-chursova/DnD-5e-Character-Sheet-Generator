(function() {
    'use strict';

    angular.module(appName)
        .controller('abilitiesController', [
            'abilitiesModel',

            function (abilitiesModel) {
                var self = this;

                self.abilities = abilitiesModel.abilities;
            }
        ]);
})();