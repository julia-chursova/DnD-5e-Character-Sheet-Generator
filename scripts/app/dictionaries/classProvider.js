(function () {
	'use strict';
	angular.module(appName)
        .factory('classProvider', function () {
        	return [
				{
					name: ""
				},
                {
                	name: "Barbarian",
					hitDie: 12,
                	specializationName: "Path",
                	specializations: [
		                {
		                	name: "Berserker"
		                },
		                {
		                	name: "Totem Warrior"
		                }
                	]
                },
                {
                	name: "Bard",
					hitDie: 8,
                	specializationName: "College",
                	specializations: [
		                {
		                	name: "Lore"
		                },
		                {
		                	name: "Valor"
		                }
                	]
                },
                {
                	name: "Cleric"
                },
                {
                	name: "Druid"
                },
                {
                	name: "Fighter"
                },
                {
                	name: "Monk"
                },
                {
                	name: "Mystic"
                },
                {
                	name: "Paladin"
                },
                {
                	name: "Ranger"
                },
                {
                	name: "Rogue"
                },
                {
                	name: "Sorcerer"
                },
                {
                	name: "Warlock"
                },
                {
                	name: "Wizard"
                }
        	];
        });
})();
