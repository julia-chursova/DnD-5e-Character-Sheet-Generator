(function () {
	'use strict';

	angular.module(appName)
		.factory('featsModel', [
			function () {
				var feats = [
				{
					name: 'Advanced sitemaker',
					prereq: 'Create charlist',
					description: 'This is feat for those who can create interactive charlists'
				}];

				function haveAlertFeat() {
					return true;
				}

				return {
					feats: feats,
					haveAlertFeat: haveAlertFeat
				}
			}
		]);
})();