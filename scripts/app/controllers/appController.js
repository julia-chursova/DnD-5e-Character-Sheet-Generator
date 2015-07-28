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
                        name: 'Initiative',
                        template: 'templates/components/initiative.html'
                    },
                    {
                        name: 'Portrait',
                        template: 'templates/directiveDefinition/portraitComponent.html'
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