(function(){
    'use strict';

    // ReSharper disable NativeTypePrototypeExtending
    Array.prototype.remove = function(element){
        var index = this.indexOf(element);

        if (index !== -1) {
            this.splice(index, 1);
        }
    };

    Array.prototype.where = function (condition) {
        var self = this;

        var result = [];
        for (var i = 0; i < self.length; i++)
            if (condition(self[i]))
                result.push(self[i]);

        return result;
    }

    
    Object.prototype.toArray = function () {
        var self = this;

        var result = [];
        Object.keys(self).forEach(function (key) {
            if (self.hasOwnProperty(key))
                result.push(self[key]);
        });

        return result;
    }
    // ReSharper enable NativeTypePrototypeExtending
    
})();