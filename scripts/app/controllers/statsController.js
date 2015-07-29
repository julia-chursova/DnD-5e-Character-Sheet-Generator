(function () {
    'use strict';

    angular.module(appName)
        .controller('statsController', [
            'statsModel',
            function (statsModel) {
                function getPrintableBonus(bonus) {
                    return bonus == 0 ? '' : bonus;
                }

                function printableModifier(modifier) {
                    return modifier > 0 ? '+' + modifier : modifier;
                }

                var self = this;

                self.stats = statsModel;

                self.racialStrBonus = function () {
                    return getPrintableBonus(stats.racialStrBonus());
                };

                self.racialDexBonus = function () {
                    return getPrintableBonus(stats.racialDexBonus());
                };

                self.racialConBonus = function () {
                    return getPrintableBonus(stats.racialConBonus());
                };

                self.racialIntBonus = function () {
                    return getPrintableBonus(stats.racialIntBonus());
                };

                self.racialWisBonus = function () {
                    return getPrintableBonus(stats.racialWisBonus());
                };

                self.racialChaBonus = function () {
                    return getPrintableBonus(stats.racialChaBonus());
                };


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