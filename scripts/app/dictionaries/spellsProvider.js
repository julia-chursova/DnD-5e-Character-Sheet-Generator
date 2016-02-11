(function () {
    'use strict';

    angular.module(appName)
        .factory('spellsProvider', [
            function () {
            	var self = this;

				// Fields
                self.spells = {
                    minorIllusion: {
                        name: "Minor Illusion",
                        level: 0
                    }
                };

	            self.spellsByLevel = [];

				// Ctor
	            (function init() {
		            var maxSpellLevel = 9;
		            for (var i = 0; i <= maxSpellLevel; i++) {
			            self.spellsByLevel.push([]);
		            }

		            for (var key in self.spells){
			            if (self.spells.hasOwnProperty(key)) {
				            var item = self.spells[key];
				            self.spellsByLevel[item.level].push(item);
			            }
		            };
	            })();

	            return self;
            }
        ]);
})();