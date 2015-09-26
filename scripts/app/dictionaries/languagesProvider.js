(function(){
    'use strict';

    angular.module(appName)
        .factory('languagesProvider', function() {
            return {
                common: "Common",
                dwarvish: "Dwarvish",
                elvish: "Elvish",
                giant: "Giant",
                gnomish: "Gnomish",
                goblin: "Goblin",
                halfling: "Halfling",
                orc: "Orc",

                abyssal: "Abyssal",
                celestial: "Celestial",
                draconic: "Draconic",
                deepSpeech: "Deep speech",
                infernal: "Infernal",
                primordial: "Primordrial",
                sylvan: "Sylvan",
                undercommon: "Undercommon"
            };
        });
})();