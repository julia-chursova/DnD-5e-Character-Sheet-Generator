(function () {
    'use strict';

    angular.module(appName)
        .controller('appController', [
            '$rootScope',
			'appState',
            function ($rootScope, appState) {
                var self = this;

				self.isEditMode = function() {
					return appState.isEditMode;
				}

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
                    appState.isEditMode = true;
                };

                self.finishEdit = function () {
                	appState.isEditMode = false;
                };

                self.print = function () {
                    print();
                };

                self.globalClick = function (event) {
                    $rootScope.$broadcast('global-click', event);
                }
            }]);
})();