(function () {
    'use strict';

    angular.module(appName)
        .controller('spellcastingController', [
            'spellcastingModel',
			'spellsProvider',

            function (spellcastingModel, spellsProvider) {
                var self = this;

                self.spells = spellcastingModel.spells;
	            self.availableSpells = spellsProvider.spellsByLevel;

	            self.simpleSpells = function() {
		            return spellcastingModel.spells.slice(0, 3);
	            }
            }
        ]);
})();