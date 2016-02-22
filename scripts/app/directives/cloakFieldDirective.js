(function () {
    'use strict';

    angular.module(appName)
        .directive('cloakField', [
            '$rootScope',
            '$timeout',
            function ($rootScope, $timeout) {
                return {
                    restrict: 'AE',
                    transclude: true,
                    templateUrl: 'templates/directives/cloakField.html',
                    scope: {
                        model: '='
                    },
                    link: function ($scope, $element) {
                        var event;

                        $scope.inEditMode = false;

                        $scope.enableEditMode = function (evt) {
                            $scope.inEditMode = true;

                            var input = $element.find('input');
                            if (input && input.length > 0) {
                                $timeout(function() {
                                    input[0].focus();
                                }, 0);
                            }

                            event = evt;
                        };

                        $scope.disableEditMode = function (evt) {
                            if (evt.keyCode === 13)
                                $scope.inEditMode = false;
                        };

                        $scope.stopEvent = function (evt) {
                            event = evt;
                        };

                        $rootScope.$on('global-click', function (evt, args) {
                            if (!event || event !== args)
                                $scope.inEditMode = false;

                            event = null;
                        });
                    }
                }
            }
        ])
    ;
})();