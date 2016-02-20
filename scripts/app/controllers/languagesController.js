(function () {
    'use strict';

    angular.module(appName)
        .controller('languagesController', [
            'languagesModel',
            'languagesProvider',

            function (languagesModel, languagesProvider) {
                var self = this;

                self.languages = function() {
                    return languagesModel.languages;
                }

                self.availableLanguages = languagesProvider;

                self.pendingLanguage = null;

                self.addPendingLanguage = function () {
                    if (self.pendingLanguage)
                        self.languages.push(self.pendingLanguage);

                    self.pendingLanguage = null;
                };

                self.removeLanguage = function (language) {
                    self.languages.remove(language);
                };
            }]);
})();