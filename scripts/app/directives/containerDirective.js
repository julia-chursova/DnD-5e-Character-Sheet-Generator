(function () {
    'use strict';

    angular.module(appName)
        .directive('container', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/directives/container.html',
                scope: {
                    layouts: '=',
                    components: '=',
                    removable: '='
                },
                link: function (scope, element, attr) {
                    var data = [];

                    for (var layoutInd = 0; layoutInd < scope.layouts.length; layoutInd++) {
                        data.push({
                            width: scope.layouts[layoutInd],
                            components: scope.components[layoutInd]
                        })
                    }

                    scope.data = data;

                    scope.dragCompleted = function (layout, $data, $evt) {
                        layout.components.push($data);
                    };
                }
            };
        });
})();