(function () {
    'use strict';

    angular.module(appName)
        .directive('portraitComponent', function () {
            return {
                restrict: 'AE',
                templateUrl: 'templates/components/portrait.html',
                link: function (scope, element, attrs) {
                	var canvas = element.find("canvas")[0];
                	var canvasContainer = canvas.parentElement;

                	canvas.width = canvas.style.width = canvasContainer.clientWidth;
                	canvas.height = canvas.style.height = canvasContainer.clientHeight;

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
                            	var widthRatio = canvas.width / image.width;
                            	var heightRatio = canvas.height / image.height;

	                            var actualWidth, actualHeight;
								if (widthRatio < heightRatio) {
									actualWidth = image.width * widthRatio;
									actualHeight = image.height * widthRatio;
								} else {
									actualWidth = image.width * heightRatio;
									actualHeight = image.height * heightRatio;
								}

								var startX = (canvas.width - actualWidth) / 2;
	                            var startY = (canvas.height - actualHeight) / 2;

                                canvas.getContext("2d").drawImage(image, startX, startY, actualWidth, actualHeight);
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