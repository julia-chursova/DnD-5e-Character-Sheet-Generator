(function() {
	'use strict';

	angular.module(appName)
		.factory('abilityProvider', [
			function() {
				return [
					{
						name: 'Darkvision',
						description: 'You can see in dim light within 60ft of you as if it were bright light, and in darkness if it were dim light. You can\'t discern colors, only shades of gray'
					},
					{
						name: 'Dwarven Resilience',
						description: 'Advantage against save throws against poison, resist against poison damage'
					}
				];
			}
		]);
})();