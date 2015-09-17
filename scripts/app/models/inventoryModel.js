(function () {
    'use strict';

    angular.module(appName)
        .factory('inventoryModel', [
            'armorModel',
            function (armorModel) {
            	var self = this;

				// Constants
            	var maxCommonItems = 15;
            	var maxPotionsAndScrolls = 10;
	            var maxQuestItems = 10;

				// Fields
	            self.items = [];
	            self.potionsAndScrolls = [];
	            self.questItems = [];

				// Ctor
	            (function init() {
		            var i;
		            for (i = 0; i < maxCommonItems; i++) {
			            self.items.push({});
		            };

		            for (i = 0; i < maxPotionsAndScrolls; i++) {
			            self.potionsAndScrolls.push({});
		            }

		            for (i = 0; i < maxQuestItems; i++) {
			            self.questItems.push({});
		            }
	            })();

				// Calculable properties
                self.inventoryWeight = function () {
                    var result = armorModel.armorWeight() + armorModel.shieldWeight();

	                var i;
                    for (i = 0; i < self.items.length; i++) {
                        result += (self.items[i].weight || 0) * (self.items[i].quantity || 0);
                    }

					for (i = 0; i < self.potionsAndScrolls.length; i++) {
						result += (self.potionsAndScrolls[i].weight || 0) * (self.potionsAndScrolls[i].quantity || 0);
					}

					for (i = 0; i < self.questItems.length; i++) {
						result += (self.questItems[i].weight || 0) * (self.questItems[i].quantity || 0);
					}

                    return result;
                };

				// Methods
				self.exportData = function() {
					return {
						items: self.items,
						potionsAndScrolls: self.potionsAndScrolls,
						questItems: self.questItems
					}
				}

				self.importData = function(data) {
					self.items = data.items;
					self.potionsAndScrolls = data.potionsAndScrolls;
					self.questItems = data.questItems;
				}

                return self;
            }
        ]);
})();