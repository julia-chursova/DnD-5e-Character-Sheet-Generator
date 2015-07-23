(function () {
    'use strict';

    angular.module(appName)
        .controller('appController',
        function () {
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
        });
})();