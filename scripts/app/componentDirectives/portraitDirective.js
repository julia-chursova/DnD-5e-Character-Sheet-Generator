(function () {
    'use strict';

    angular.module(appName)
        .directive('portraitComponent', function () {
            return {
                restrict: 'AE',
                templateUrl: 'templates/components/portrait.html',
                link: function (scope, element, attrs) {
                    var canvas = element.find("canvas")[0];

                    scope.width = 280;
                    scope.height = 390;

                    scope.initUpload = function(){
                        element.find("input")[0].click();
                    };

                    scope.upload = function (event) {
                        scope.clear();

                        var reader = new FileReader();
                        var image;

                        reader.onload = function (e) {
                            image = new Image();
                            image.src = e.target.result;

                            image.onload = function () {
                                canvas.getContext("2d").drawImage(image, 0, 0, scope.width, scope.height);
                            };
                        };

                        reader.readAsDataURL(event.currentTarget.files[0]);
                    };

                    scope.clear = function () {
                        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
                    };
                }
            }
        });
})();