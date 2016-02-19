(function () {
    'use strict';

    angular.module(appName)
        .factory('statsModel', [
			'raceModel',
            'helpers',

			function (raceModel, helpers) {
			    function getModifier(rawStatValue, racialBonus) {
			        return Math.floor(((parseInt(rawStatValue) || 0) + racialBonus - 10) / 2);
			    }

			    var self = this;

			    self.init = function () {
			        self.strength = '';
			        self.dexterity = '';
			        self.constitution = '';
			        self.intelligence = '';
			        self.wisdom = '';
			        self.charisma = '';

			        self.customRacialStrBonus = '';
			        self.customRacialDexBonus = '';
			        self.customRacialConBonus = '';
			        self.customRacialIntBonus = '';
			        self.customRacialWisBonus = '';
			        self.customRacialChaBonus = '';

			        self.strBonus = '';
			        self.dexBonus = '';
			        self.conBonus = '';
			        self.intBonus = '';
			        self.wisBonus = '';
			        self.chaBonus = '';
			    }

			    self.init();

			    // Calculable fields
			    self.racialStrBonus = function () {
			        if (helpers.isInteger(self.customRacialStrBonus))
			            return self.customRacialStrBonus;

			        return raceModel.race
						? (raceModel.race.strBonus || 0)
						: 0;
			    };

			    self.racialDexBonus = function () {
			        if (helpers.isInteger(self.customRacialDexBonus))
			            return self.customRacialDexBonus;

			        return raceModel.race
						? (raceModel.race.dexBonus || 0)
						: 0;
			    };

			    self.racialConBonus = function () {
			        if (helpers.isInteger(self.customRacialConBonus))
			            return self.customRacialConBonus;

			        return raceModel.race
						? (raceModel.race.conBonus || 0)
						: 0;
			    };

			    self.racialIntBonus = function () {
			        if (helpers.isInteger(self.customRacialIntBonus))
			            return self.customRacialIntBonus;

			        return raceModel.race
						? (raceModel.race.intBonus || 0)
						: 0;
			    };

			    self.racialWisBonus = function () {
			        if (helpers.isInteger(self.customRacialWisBonus))
			            return self.customRacialWisBonus;

			        return raceModel.race
						? (raceModel.race.wisBonus || 0)
						: 0;
			    };

			    self.racialChaBonus = function () {
			        if (helpers.isInteger(self.customRacialChaBonus))
			            return self.customRacialChaBonus;

			        return raceModel.race
			            ? (raceModel.race.chaBonus || 0)
			            : 0;
			    };

			    self.strModifier = function () {
			        return getModifier(self.strength, self.racialStrBonus()) + (parseInt(self.strBonus) || 0);
			    };

			    self.dexModifier = function () {
			        return getModifier(self.dexterity, self.racialDexBonus()) + (parseInt(self.dexBonus) || 0);
			    };

			    self.conModifier = function () {
			        return getModifier(self.constitution, self.racialConBonus()) + (parseInt(self.conBonus) || 0);
			    };

			    self.intModifier = function () {
			        return getModifier(self.intelligence, self.racialIntBonus()) + (parseInt(self.intBonus) || 0);
			    };

			    self.wisModifier = function () {
			        return getModifier(self.wisdom, self.racialWisBonus()) + (parseInt(self.wisBonus) || 0);
			    };

			    self.chaModifier = function () {
			        return getModifier(self.charisma, self.racialChaBonus()) + (parseInt(self.chaBonus) || 0);
			    };

			    // Methods
			    self.exportData = function () {
			        return {
			            strength: self.strength,
			            dexterity: self.dexterity,
			            constitution: self.constitution,
			            intelligence: self.intelligence,
			            wisdom: self.wisdom,
			            charisma: self.charisma,

			            strBonus: self.strBonus,
			            dexBonus: self.dexBonus,
			            conBonus: self.conBonus,
			            intBonus: self.intBonus,
			            wisBonus: self.wisBonus,
			            chaBonus: self.chaBonus
			        }
			    }

			    self.importData = function (data) {
			        self.strength = data.strength;
			        self.dexterity = data.dexterity;
			        self.constitution = data.constitution;
			        self.intelligence = data.intelligence;
			        self.wisdom = data.wisdom;
			        self.charisma = data.charisma;

			        self.strBonus = data.strBonus;
			        self.dexBonus = data.dexBonus;
			        self.conBonus = data.conBonus;
			        self.intBonus = data.intBonus;
			        self.wisBonus = data.wisBonus;
			        self.chaBonus = data.chaBonus;
			    }

			    return self;
			}]);
})();