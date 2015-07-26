(function(){
    'use strict';

    angular.module(appName)
        .controller('traitsController', [
            'traitsModel',
            function(traitsModel){
                var self = this;

                self.data = traitsModel;
            }
        ]);
})();