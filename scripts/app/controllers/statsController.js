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
                	return getPrintableBonus(statsModel.racialStrBonus());
                };

                self.racialDexBonus = function () {
                	return getPrintableBonus(statsModel.racialDexBonus());
                };

                self.racialConBonus = function () {
                	return getPrintableBonus(statsModel.racialConBonus());
                };

                self.racialIntBonus = function () {
                	return getPrintableBonus(statsModel.racialIntBonus());
                };

                self.racialWisBonus = function () {
                	return getPrintableBonus(statsModel.racialWisBonus());
                };

                self.racialChaBonus = function () {
                	return getPrintableBonus(statsModel.racialChaBonus());
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