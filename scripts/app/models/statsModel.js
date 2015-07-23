(function () {
    'use strict';

    angular.module(appName)
        .factory('statsModel', function () {
            function getModifier(statValue) {
                return Math.floor((statValue - 10) / 2);
            }

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
                return getModifier(self.strength) + (parseInt(self.strBonus) || 0);
            };

            self.dexModifier = function () {
                return getModifier(self.dexterity) + (parseInt(self.dexBonus) || 0);
            };

            self.conModifier = function(){
                return getModifier(self.constitution) + (parseInt(self.conBonus) || 0);
            };

            self.intModifier = function(){
                return getModifier(self.intelligence) + (parseInt(self.intBonus) || 0);
            };

            self.wisModifier = function(){
                return getModifier(self.wisdom) + (parseInt(self.wisBonus) || 0);
            };

            self.chaModifier = function(){
                return getModifier(self.charisma) + (parseInt(self.chaBonus) || 0);
            };

            return self;
        });
})();