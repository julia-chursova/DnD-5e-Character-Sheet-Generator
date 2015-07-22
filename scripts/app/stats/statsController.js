(function () {
    'use strict';

    angular.module(appName)
        .controller('statsController', [
            'statsCalculator',
            function (statsCalculator) {
                var self = this;

                self.strength = 0;
                self.dexterity = 0;
                self.constitution = 0;
                self.intelligence = 0;
                self.wisdom = 0;
                self.charisma = 0;

                self.strBonus = 0;
                self.dexBonus = 0;
                self.conBonus = 0;
                self.intBonus = 0;
                self.wisBonus = 0;
                self.chaBonus = 0;

                self.strModifier = function () {
                    return statsCalculator.getModifier(self.strength) + parseInt(self.strBonus);
                };

                self.dexModifier = function () {
                    return statsCalculator.getModifier(self.dexterity) + parseInt(self.dexBonus);
                };

                self.conModifier = function () {
                    return statsCalculator.getModifier(self.constitution) + parseInt(self.conBonus);
                };

                self.intModifier = function () {
                    return statsCalculator.getModifier(self.intelligence) + parseInt(self.intBonus);
                };

                self.wisModifier = function () {
                    return statsCalculator.getModifier(self.wisdom) + parseInt(self.wisBonus);
                };

                self.chaModifier = function () {
                    return statsCalculator.getModifier(self.charisma) + parseInt(self.chaBonus);
                };

                function printableModifier(modifier) {
                    return modifier > 0 ? '+' + modifier : modifier;
                }

                self.printableStrModifier = function () {
                    return printableModifier(self.strModifier());
                };

                self.printableDexModifier = function () {
                    return printableModifier(self.dexModifier());
                };

                self.printableConModifier = function () {
                    return printableModifier(self.conModifier());
                };

                self.printableIntModifier = function () {
                    return printableModifier(self.intModifier());
                };

                self.printableWisModifier = function () {
                    return printableModifier(self.wisModifier());
                };

                self.printableChaModifier = function () {
                    return printableModifier(self.chaModifier());
                };
            }]);
})();