(function () {
    'use strict';

    angular.module(appName)
        .factory('inventoryModel', [
            'armorModel',
            function (armorModel) {
            	var self = this;

	            var maxItems = 20;

	            self.items = [];
	            
	            for (var i = 0; i < maxItems; i++) {
		            self.items.push({});
	            };

                self.inventoryWeight = function () {
                    var result = armorModel.armorWeight() + armorModel.shieldWeight();

                    for (var i = 0; i < self.items.length; i++) {
                        result += (self.items[i].weight || 0) * (self.items[i].quantity || 0);
                    }

                    return result;
                };

                return self;
            }
        ]);
})();