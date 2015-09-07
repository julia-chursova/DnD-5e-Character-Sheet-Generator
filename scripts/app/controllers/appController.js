(function () {
    'use strict';

    angular.module(appName)
        .controller('appController', [
            '$rootScope',
			'appState',
			'appComponents',
            function ($rootScope, appState, appComponents) {
                var self = this;

				self.isEditMode = function() {
					return appState.isEditMode;
				}

                self.editLayout = function () {
                    appState.isEditMode = true;
                };

                self.finishEdit = function () {
                	appState.isEditMode = false;
                };

	            self.getAvailableModules = appComponents.getAvailableModules;

                self.print = function () {
                    print();
                };

                self.globalClick = function (event) {
                    $rootScope.$broadcast('global-click', event);
                }
            }]);
})();