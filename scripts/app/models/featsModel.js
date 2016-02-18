(function () {
    'use strict';

    angular.module(appName)
		.factory('featsModel', [
			function () {
			    var self = this;

			    self.init = function () {
			        self.feats = [];

			        var featsCount = 9;
			        for (var i = 0; i < featsCount; i++)
			            self.feats.push({});
			    }

			    self.init();

			    // Methods
                self.haveFeat = function(feat) {
                    return self.feats.indexOf(feat) >= 0;
                }

			    self.exportData = function () {
			        return {
			            feats: self.feats
			        }
			    }

			    self.importData = function (data) {
			        self.feats = data.feats;
			    }

			    return self;
			}
		]);
})();