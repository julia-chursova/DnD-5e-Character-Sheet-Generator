(function () {
    'use strict';

    angular.module(appName)
        .controller('appController', [
            '$rootScope',
            function ($rootScope) {
                var self = this;

                self.isEditMode = false;
                self.availableControls = [
                    {
                        name: 'Logo',
                        template: 'templates/components/logo.html'
                    },
                    {
                        name: 'Player',
                        template: 'templates/components/player.html'
                    },
                    {
                        name: 'Stats',
                        template: 'templates/components/stats.html'
                    },
                    {
                        name: 'Inventory',
                        template: 'templates/components/inventory.html'
                    },
                    {
                        name: 'Character',
                        template: 'templates/components/character.html'
                    },
                    {
                        name: 'Languages',
                        template: 'templates/components/languages.html'
                    },
                    {
                        name: 'Initiative',
                        template: 'templates/components/initiative.html'
                    }
                ];

                self.editLayout = function () {
                    self.isEditMode = true;
                };

                self.finishEdit = function () {
                    self.isEditMode = false;
                };

                self.print = function () {
                    print();
                };

                self.globalClick = function (event) {
                    $rootScope.$broadcast('global-click', event);
                }
            }]);
})();