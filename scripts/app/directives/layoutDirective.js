(function () {
	'use strict';

	angular.module(appName)
		.directive('layout', [
			'appState',
			function(appState) {
				return {
					restrict: 'EA',
					templateUrl: 'templates/directives/layout.html',
					transclude: true,
					scope: {},
					controller: function($scope) {
						$scope.blocks = [];
						$scope.appState = appState;

						this.addBlock = function(block) {
							$scope.blocks.push(block);
						}

						$scope.addDraggableItem = function (columnItems, $data, index) {
							var data;
							if ($data.type === 'block') {
								var columns = [];
								for (var i = 0; i < $data.columns.length; i++) {
									columns.push({
										width: $data.columns[i],
										items: []
									});
								}

								data = {
									type: 'block',
									data: {
										columns: columns
									}
								};
							} else {
								data = $data;
							}

							if (typeof index !== 'undefined') {
								columnItems.splice(index, 0, data);
							} else {
								columnItems.push(data);
							}
						};

						$scope.removeDraggableItem = function(columnItems, item) {
							var index = columnItems.indexOf(item);

							if (index > -1)
								columnItems.splice(index, 1);
						}
					}
				};
			}
		])
		.directive('layoutBlock', function() {
			return {
				restrict: 'E',
				template: '<div style="display: none" ng-transclude></div>',
				require: ['?^^layout', '?^^layoutColumn'],
				transclude: true,
				scope: {},
				link: function(scope, element, attrs, parents) {
					var layoutParent = parents[0];
					var columnParent = parents[1];

					if (columnParent) {
						columnParent.addItem({
							type: 'block',
							data: scope
						});
					} else {
						layoutParent.addBlock(scope);
					}
				},
				controller: function($scope) {
					$scope.columns = [];

					this.addColumn = function(column) {
						$scope.columns.push(column);
					}
				}
			}
		})
		.directive('layoutColumn', function() {
			return {
				restrict: 'E',
				template: '<div style="display: none" ng-transclude></div>',
				require: '^^layoutBlock',
				transclude: true,
				scope: {
					width: '=width'
				},
				link: function(scope, element, attrs, layoutBlock) {
					layoutBlock.addColumn(scope);
				},
				controller: function($scope) {
					$scope.items = [];

					this.addItem = function(item) {
						$scope.items.push(item);
					}
				}
			}
		})
		.directive('component', function() {
			return {
				restrict: 'E',
				require: '^^layoutColumn',
				scope: {
					template: '=template'
				},
				link: function(scope, element, attrs, layoutColumn) {
					layoutColumn.addItem({
						template: scope.template,
						type: 'component'
					});
				}
			}
		});
})();