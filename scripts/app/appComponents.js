(function () {
	'use strict';

	angular.module(appName)
		.factory('appComponents', function () {
			var allModules = [];

			(function init() {
				allModules = [
					{
						name: 'Armor',
						template: 'templates/components/armor.html'
					},
					{
						name: 'Armor Class',
						template: 'templates/components/armorClass.html'
					},
					{
						name: 'Character',
						template: 'templates/components/character.html'
					},
                    {
                        name: 'New Character',
                        template: 'templates/components/character.html'
                    },
					{
						name: 'Death Saves',
						template: 'templates/components/deathSaves.html'
					},
					{
						name: 'Feats',
						template: 'templates/components/feats.html'
					},
					{
						name: 'Hit Points',
						template: 'templates/components/hitPoints.html'
					},
					{
						name: 'Initiative',
						template: 'templates/components/initiative.html'
					},
					{
						name: 'Inventory',
						template: 'templates/components/inventory.html'
					},
					{
						name: 'Languages',
						template: 'templates/components/languages.html'
					},
					{
						name: 'Logo',
						template: 'templates/components/logo.html'
					},
					{
						name: 'Money',
						template: 'templates/components/money.html'
					},
					{
						name: 'Player',
						template: 'templates/components/player.html'
					},
					{
						name: 'Portrait',
						template: 'templates/directiveDefinition/portraitComponent.html'
					},
					{
						name: 'Potions and Scrolls',
						template: 'templates/components/potionsAndScrolls.html'
					},
					{
						name: 'Proficiencies',
						template: 'templates/components/proficiencies.html'
					},
					{
						name: 'Quest Items',
						template: 'templates/components/questItems.html'
					},
					{
						name: 'Save Throws',
						template: 'templates/components/saveThrows.html'
					},
					{
						name: 'Shield',
						template: 'templates/components/shield.html'
					},
					{
						name: 'Skills',
						template: 'templates/components/skills.html'
					},
					{
						name: 'Speed',
						template: 'templates/components/speed.html'
					},
					{
						name: 'Spellcasting',
						template: 'templates/components/spellcasting.html'
					},
					{
						name: 'Stats',
						template: 'templates/components/stats.html'
					},
					{
						name: 'Weapon',
						template: 'templates/components/weapon.html'
					}
				];

				allModules.sort(function (a, b) {
					return a.name === b.name
						? 0
						: a.name < b.name
						? -1 : 1;
				});
			})();

			function getAvailableModules() {
				return allModules;
			}

			return {
				spellcastingAvailable: false,
				getAvailableModules: getAvailableModules()
			}
		});
})();