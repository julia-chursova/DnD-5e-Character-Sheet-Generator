(function () {
	'use strict';
	angular.module(appName)
        .factory('classProvider', function () {
        	var classes = [
				{
					name: ''
				},
                {
                	name: 'Barbarian'
                },
                {
                	name: 'Bard'
                },
                {
                	name: 'Cleric'
                },
                {
                	name: 'Druid'
                },
                {
                	name: 'Fighter'
                },
                {
                	name: 'Monk'
                },
                {
                	name: 'Mystic'
                },
                {
                	name: 'Paladin'
                },
                {
                	name: 'Ranger'
                },
                {
                	name: 'Rogue'
                },
                {
                	name: 'Sorcerer'
                },
                {
                	name: 'Warlock'
                },
                {
                	name: 'Wizard'
                }
        	];

        	var archetypes = function (classItem) {
        		return [];
        	};

        	return {
        		classList: classes,
        		archetypes: archetypes
        	}
        });
})();
