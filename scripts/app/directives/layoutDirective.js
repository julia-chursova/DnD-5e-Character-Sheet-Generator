(function () {
	'use strict';

	angular.module(appName)
		.directive('layout', [
			function () {
				return {
					restrict: 'E',
					templateUrl: 'templates/directives/layout.html',
					transclude: true,
					scope: {
						removable: '=removable'
					},
					controller: function ($scope) {
						$scope.columns = [];

						this.addItem = function (column) {
							$scope.columns.push(column);
						}

						$scope.dragCompleted = function (column, $data, $evt) {
							var template = $data.template;
							var index = $data.index;

							if (typeof index !== 'undefined') {
								column.items.splice(index, 0, template);
							} else {
								column.items.push(template);
							}
						};
					}
				};
			}
		])
		.directive('layoutColumn', function () {
			return {
				restrict: 'E',
				template: '<div style="display: none" ng-transclude></div>',
				require: '^layout',
				transclude: true,
				scope: {},
				link: function (scope, element, attrs, layout) {
					layout.addItem(scope);
				},
				controller: function ($scope) {
					$scope.items = [];

					this.addItem = function (template) {
						$scope.items.push(template);
					}
				}
			}
		})
		.directive('component', function () {
			return {
				restrict: 'E',
				require: '^layoutColumn',
				scope: {
					template: '=template'
				},
				link: function (scope, element, attrs, layoutColumn) {
					layoutColumn.addItem(scope.template);
				}
			}
		});
})();