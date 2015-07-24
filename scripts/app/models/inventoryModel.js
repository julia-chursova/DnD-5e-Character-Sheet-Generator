(function () {
    'use strict';

    angular.module(appName)
        .factory('inventoryModel', [
            'armorModel',
            function (armorModel) {
                var self = this;

                self.items = [{
                    name: 'test',
                    value: 2,
                    weight: 10
                }];

                self.inventoryWeight = function () {
                    var result = armorModel.armorWeight() + armorModel.shieldWeight();

                    for (var i = 0; i < self.items.length; i++) {
                        result += (self.items[i].weight || 0);
                    }

                    return result;
                };

                return self;
            }
        ]);
})();