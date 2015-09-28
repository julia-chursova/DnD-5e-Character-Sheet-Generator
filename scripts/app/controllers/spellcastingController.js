(function () {
    'use strict';

    angular.module(appName)
        .controller('spellcastingController', [
            'spellcastingModel',

            function (spellcastingModel) {
                var self = this;

                self.spells = spellcastingModel.spells;

	            self.simpleSpells = function() {
		            return spellcastingModel.spells.slice(0, 3);
	            }
            }
        ]);
})();