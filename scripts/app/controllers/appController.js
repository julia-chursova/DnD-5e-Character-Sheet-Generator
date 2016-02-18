(function () {
    'use strict';

    angular.module(appName)
        .controller('appController', [
            '$rootScope',
            '$interval',
			'appState',
			'appComponents',
			'serializer',

            function ($rootScope, $interval, appState, appComponents, serializer) {
                var self = this;

	            var linkUpdatingInProgress = false;

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

				self.updateLink = function() {
					linkUpdatingInProgress = true;
					window.location.hash = serializer.serialize();
					linkUpdatingInProgress = false;
				}

				self.newDocument = function () {
				    serializer.newModel();
				}

				self.globalClick = function (event) {
				    $rootScope.$broadcast('global-click', event);
				}

	            $rootScope.$on("$locationChangeSuccess", function() {
		            if (linkUpdatingInProgress)
			            return;

		            serializer.deserialize();
	            });

                if (!window.location.hash) {
                    serializer.loadModel();
                }

                $interval(serializer.saveModel, 10000);
            }]);
})();