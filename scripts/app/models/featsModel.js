(function () {
	'use strict';

	angular.module(appName)
		.factory('featsModel', [
			function () {
				var self = this;

				// Fields
				self.feats = [];

				// Ctor
				(function init() {
					self.feats.push({
						name: "Advanced sitemaker",
						prereq: "Create charlist",
						description: "This is feat for those who can create interactive charlists"
					});
				})();

				// Calculable properties
				self.haveAlertFeat = function() {
					return true;
				}

				// Methods
				self.exportData = function() {
					return {
						feats: self.feats
					}
				}

				self.importData = function(data) {
					self.feats = data.feats;
				}

				return self;
			}
		]);
})();