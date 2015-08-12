(function () {
	'use strict';

	angular.module(appName)
        .factory('raceProvider', function () {
			function copyProperties(src, dest) {
				for (var prop in src) {
					if (prop !== "name" && prop !== "size" && prop !== "subtypes") {
						if (!dest.hasOwnProperty(prop))
							dest[prop] = src[prop];
						else
							dest[prop] += src[prop];
					}
				}
			}

        	function transformData(races) {
        		var result = [];

        		for (var i = 0; i < races.length; i++) {
        			if (races[i].subtypes) {
        				for (var j = 0; j < races[i].subtypes.length; j++) {
							var subRace = {
						        name: races[i].name + " (" + races[i].subtypes[j].name + ")",
						        size: races[i].subtypes[j].size || races[i].size
					        };

							copyProperties(races[i], subRace);
							copyProperties(races[i].subtypes[j], subRace);

					        result.push(subRace);
        				}
        			} else {
				        result.push(races[i]);
			        }
        		}

        		return result;
        	}

        	var data = [
                {
                	name: 'Dwarf',
                	size: 'Medium',
                	conBonus: 2,
                	subtypes: [
		                {
		                	name: 'Mountain',
							strBonus: 2
		                },
		                {
		                	name: 'Hill',
							wisBonus: 1
		                }
                	]
                },
                {
                	name: 'Elf'
                },
                {
                	name: 'Gnome'
                },
                {
                	name: 'Half-Elf'
                },
                {
                	name: 'Half-Orc'
                },
                {
                	name: 'Halfling'
                },
                {
                	name: 'Human'
                }
        	];

        	return transformData(data);
        });
})();