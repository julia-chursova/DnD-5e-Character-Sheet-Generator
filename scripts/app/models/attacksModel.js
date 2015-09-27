(function () {
    'use strict';

	angular.module(appName)
		.factory('attacksModel', [
			'statsModel',
			'characterModel',
            'proficienciesModel',

			function(statsModel, characterModel, proficienciesModel) {
				var self = this;

				// Fields
				self.attacks = [];

				// Methods
				function purifyDataStructures (data) {
					var result = [];

					if (!data)
						return result;

					function copyData(item) {
						return {
							name: item.name,
							baseDamage: item.baseDamage,
							isRanged: item.isRanged,
							range: item.range,
							ammo: item.ammo
						};
					}

					for (var i = 0; i < data.length; i++)
						result.push(copyData(data[i]));

					return result;
				}

				function addCalculableFunctions (data) {
					var result = [];

					if (!data)
						return result;

					function createItem(item) {
						var self = this;

						self.name = item.name;
					    self.type = item.type;
						self.baseDamage = item.baseDamage;
						self.isRanged = item.isRanged;
						self.range = item.range;
						self.ammo = item.ammo;

						self.attack = function () {
						    var proficiencyBonus = proficienciesModel.weapons[self.type]
                                ? characterModel.proficiencyBonus()
                                : 0;

						    return proficiencyBonus + (self.isRanged
								? statsModel.dexModifier()
								: statsModel.strModifier());
						};

						self.damage = function() {
							return (self.baseDamage || 0) + ' + ' + (self.isRanged
								? statsModel.dexModifier()
								: statsModel.strModifier());
						};

						return self;
					}

					for (var i = 0; i < data.length; i++) {
						result.push(new createItem(data[i]));
					}

					return result;
				}

				self.exportData = function() {
					return {
						attacks: purifyDataStructures(self.attacks)
					}
				};

				self.importData = function(data) {
					self.attacks = addCalculableFunctions(data.attacks);
				};

				// Ctor
				(function () {
					var attacksCount = 5;

					var attacks = [];
					for (var i = 0; i < attacksCount; i++) {
						attacks.push({
							name: '',
							baseDamage: '',
							range: '',
                            type: null,
							ammo: null
						});
					}

					self.attacks = addCalculableFunctions(attacks);
				})();

				return self;
			}
		]);
})();