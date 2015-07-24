(function(){
    'use strict';

    angular.module(appName)
        .factory('languagesProvider', function(){
            return [
                'Common',
                'Dwarvish',
                'Elvish',
                'Giant',
                'Gnomish',
                'Goblin',
                'Halfling',
                'Orc',

                'Abyssal',
                'Celestial',
                'Draconic',
                'Deep speech',
                'Infernal',
                'Primordrial',
                'Sylvan',
                'Undercommon'
            ];
        });
})();