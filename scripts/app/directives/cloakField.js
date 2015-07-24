(function () {
    'use strict';

    angular.module(appName)
        .directive('cloakField', [
            '$rootScope',
            function ($rootScope) {
                return {
                    restrict: 'AE',
                    templateUrl: 'templates/directives/cloakField.html',
                    scope: {
                        model: '='
                    },
                    link: function (scope, element, attr) {
                        var event;

                        scope.inEditMode = false;

                        scope.enableEditMode = function (evt) {
                            scope.inEditMode = true;

                            event = evt;
                        };

                        scope.disableEditMode = function (evt) {
                            if (evt.keyCode == 13)
                                scope.inEditMode = false;
                        };

                        scope.stopEvent = function (evt) {
                            event = evt;
                        };

                        $rootScope.$on('global-click', function (evt, args) {
                            if (!event || event != args)
                                scope.inEditMode = false;

                            event = null;
                        });
                    }
                }
            }
        ])
    ;
})();