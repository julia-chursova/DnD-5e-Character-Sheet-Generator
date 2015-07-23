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

                self.printableDexModifier = function () {
                    return printableModifier(statsModel.dexModifier());
                };

                self.printableConModifier = function () {
                    return printableModifier(statsModel.conModifier());
                };

                self.printableIntModifier = function () {
                    return printableModifier(statsModel.intModifier());
                };

                self.printableWisModifier = function () {
                    return printableModifier(statsModel.wisModifier());
                };

                self.printableChaModifier = function () {
                    return printableModifier(statsModel.chaModifier());
                };
            }]);
})();