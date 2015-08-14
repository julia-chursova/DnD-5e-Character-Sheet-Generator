(function () {
    'use strict';

    angular.module(appName)
        .factory('inventoryModel', [
            'armorModel',
            function (armorModel) {
            	var self = this;

            	var maxCommonItems = 20;
            	var maxPotions = 10;
	            var maxScrolls = 10;

	            self.items = [];
	            self.potions = [];
	            self.scrolls = [];

	            var i;
	            for (i = 0; i < maxCommonItems; i++) {
		            self.items.push({});
	            };

				for (i = 0; i < maxPotions; i++) {
					self.potions.push({});
				}

				for (i = 0; i < maxScrolls; i++) {
					self.scrolls.push({});
				}

                self.inventoryWeight = function () {
                    var result = armorModel.armorWeight() + armorModel.shieldWeight();

	                var i;
                    for (i = 0; i < self.items.length; i++) {
                        result += (self.items[i].weight || 0) * (self.items[i].quantity || 0);
                    }

					for (i = 0; i < self.potions.length; i++) {
						result += (self.potions[i].weight || 0) * (self.potions[i].quantity || 0);
					}

					for (i = 0; i < self.scrolls.length; i++) {
						result += (self.scrolls[i].weight || 0) * (self.scrolls[i].quantity || 0);
					}

                    return result;
                };

                return self;
            }
        ]);
})();