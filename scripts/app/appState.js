﻿(function() {
	'use strict';

	angular.module(appName)
		.factory('appState', function() {
			return {
			    isEditMode: false,
			    isLoadOpened: false,
                isLoading: false
			}
		});
})();