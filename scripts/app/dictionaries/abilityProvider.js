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
					},
					{
						name: 'Stonecunning',
						description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you add doubled proficiency bonus to the check.'
					},
					{
						name: 'Keen Senses',
						description: 'Proficiency in Perception skill'
					},
					{
						name: 'Fey Ancestry',
						description: 'Advantage on saving throws against beign charmed'
					},
					{
						name: "Trance",
						description: "You don't need to sleep. Instead, you meditate deepely for 4 hours."
					},
					{
						name: "Mask of the Wild",
						description: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist or other natural pfenomena."
					},
					{
						name: "Superior Darkvision",
						description: "You darkvision has range of 120ft."
					},
					{
						name: "Sunlight Sensitivity",
						description: "You have disadvantage on attack rolls and Wis (Perception) checks that rely on sight when you, the target of your attack or whatever you are trying to perceive is in direct light"
					},
					{
						name: "Lucky",
						description: "When you roll 1 on attack roll, ability check or saving throw, you can reroll the die and must use the new roll"
					},
					{
						name: "Brave",
						description: "You have advantage on saving throws against beign frightened"
					},
					{
						name: "Halfling Nimbleness",
						description: "You can move throug the space of any creature that is of a size larger than yours."
					},
					{
						name: "Natural Stealthy",
						description: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you"
					},
					{
						name: "Stout Resilience",
						description: "You have advantage on saving throws againts poison, and you have resistance against poison damage"
					},
					{
						name: "Gnome Cunning",
						description: "You have advantage on all Intelligence, Wisdom and Charisma saving throws against magic."
					},
					{
						name: "Speak with Small Beasts",
						description: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts."
					},
					{
						name: "Artificer's Lore",
						description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects or technological devices, you can add twice your proficiency bonus."
					},
					{
						name: "Menacing",
						description: "You gain proficiency in Intimidation skill"
					},
					{
						name: "Relentless Endurance",
						description: "When you are reduced to 0 hp, but not killed, you can drop to 1 hp. You can't use this feature again until you finish a long rest."
					},
					{
						name: "Savage Attacks",
						description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
					},
					{
						name: "Hellish resistance",
						description: "You have resistance to fire damage"
					}
				];
			}
		]);
})();