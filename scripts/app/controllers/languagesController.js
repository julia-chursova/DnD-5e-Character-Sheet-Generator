(function () {
    'use strict';

    angular.module(appName)
        .controller('languagesController', [
            'languagesModel',
            'languagesProvider',
            function (languagesModel, languagesProvider) {
                var self = this;

                self.languages = languagesModel;
                self.availableLanguages = languagesProvider;

                self.pendingLanguage = null;

                self.addPendingLanguage = function () {
                    if (self.pendingLanguage)
                        self.languages.push(self.pendingLanguage);

                    self.pendingLanguage = null;
                }
            }]);
})();