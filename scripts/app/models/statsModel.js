(function () {
    'use strict';

    angular.module(appName)
        .factory('statsModel', function () {
            function getModifier(statValue) {
                return Math.floor(((statValue || 0) - 10) / 2);
            }

            var self = this;

            self.strength = '';
            self.dexterity = '';
            self.constitution = '';
            self.intelligence = '';
            self.wisdom = '';
            self.charisma = '';

            self.strBonus = '';
            self.dexBonus = '';
            self.conBonus = '';
            self.intBonus = '';
            self.wisBonus = '';
            self.chaBonus = '';

            self.racialStrBonus = function () {
                return 0;
            };

            self.racialDexBonus = function () {
                return 0;
            };

            self.racialConBonus = function () {
                return 0;
            };

            self.racialIntBonus = function () {
                return 0;
            };

            self.racialWisBonus = function () {
                return 0;
            };

            self.racialChaBonus = function () {
                return 0;
            };

            self.strModifier = function () {
                return getModifier(self.strength) + (parseInt(self.strBonus) || 0);
            };

            self.dexModifier = function () {
                return getModifier(self.dexterity) + (parseInt(self.dexBonus) || 0);
            };

            self.conModifier = function () {
                return getModifier(self.constitution) + (parseInt(self.conBonus) || 0);
            };

            self.intModifier = function () {
                return getModifier(self.intelligence) + (parseInt(self.intBonus) || 0);
            };

            self.wisModifier = function () {
                return getModifier(self.wisdom) + (parseInt(self.wisBonus) || 0);
            };

            self.chaModifier = function () {
                return getModifier(self.charisma) + (parseInt(self.chaBonus) || 0);
            };

            return self;
        });
})();