(function () {
    'use strict';

    angular.module(appName)
        .factory('toolTypeProvider', function () {
            return {
                smith: "Smith",
                brewer: "Brewer",
                mason: "Mason",
                artisan: "Artisan",
                disguiseKit: "Disguise Kit",
                forgeryKit: "Forgery Kit",
                gamingSet: "Gaming Set",
                thievesTools: "Thieves' tools",
                musicalInstrument: "Musical Instrument",
                herbalismKit: "Herbalism Kit",
                landVehicles: "Land Vehicles",
                waterVehicles: "Water Vehicles",
                navigatorTools: "Navigator's Tools"
            }
        });
})();