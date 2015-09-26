(function () {
    'use strict';

    angular.module(appName)
        .controller('spellcastingController', [
            'spellcastingModel',

            function (spellcastingModel) {
                var self = this;

                self.spells = spellcastingModel.spells;
            }
        ]);
})();