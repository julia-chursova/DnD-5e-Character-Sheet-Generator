(function () {
    'use strict';

    angular.module(appName)
		.factory('featsModel', [
            'featsProvider',

			function (featsProvider) {
			    var self = this;

			    // Fields
			    self.feats = [];

			    // Ctor
			    (function init() {
			    })();

			    // Calculable properties
			    self.haveAlertFeat = function () {
			        return self.feats.indexOf(featsProvider.alert) >= 0;
			    }

			    // Methods
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