(function () {
    'use strict';

    angular.module(appName)
        .controller('appController',
        function () {
            var self = this;

            self.isEditMode = false;

            self.editLayout = function () {
                self.isEditMode = true;
            };

            self.finishEdit = function () {
                self.isEditMode = false;
            };

            self.print = function () {
                print();
            };
        });
})();