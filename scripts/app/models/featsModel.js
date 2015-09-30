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
			    })();

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