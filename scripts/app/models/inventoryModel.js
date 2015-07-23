(function(){
    'use strict';

    angular.module(appName)
        .factory('inventoryModel', function(){
            var self = this;

            self.items = [{
                name: 'test',
                value: 2,
                weight: 10
            }];

            self.inventoryWeight = function(){
                var result = 0;
                for (var i = 0; i < items.length; i++){
                    result += items[i].weight;
                }

                return result;
            };

            return self;
        });
})();