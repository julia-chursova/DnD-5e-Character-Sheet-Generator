(function () {
    'use strict';

    angular.module(appName)
        .controller('inventoryController', [
            'inventoryModel',

            function (inventoryModel) {
                var self = this;

                self.model = inventoryModel;
            }]);
})();