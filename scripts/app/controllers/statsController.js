(function () {
    'use strict';

    angular.module(appName)
        .controller('statsController', [
            'statsModel',
            function (statsModel) {
                function printableModifier(modifier) {
                    return modifier > 0 ? '+' + modifier : modifier;
                }

                var self = this;

                self.stats = statsModel;

                self.printableStrModifier = function () {
                    return printableModifier(statsModel.strModifier());
                };
            }]);
})();