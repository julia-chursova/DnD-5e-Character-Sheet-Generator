(function () {
    'use strict';

    angular.module(appName)
        .directive('cloakField', [
            '$rootScope',
            function ($rootScope) {
                return {
                    restrict: 'E',
                    templateUrl: 'templates/directives/cloakField.html',
                    scope: {
                        model: '='
                    },
                    link: function (scope, element, attr) {
                        scope.inEditMode = false;

                        var event;

                        scope.enableEditMode = function (evt) {
                            scope.inEditMode = true;

                            event = evt;
                        };

                        scope.stopEvent = function(evt){
                            event = evt;
                        };

                        $rootScope.$on('global-click', function (evt, args) {
                            if (!event || event != args)
                                scope.inEditMode = false;

                            event = null;
                        });
                    }
                }
            }]);
})();