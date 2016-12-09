'use strict';

angular.module('basicAdmin')

.service('dataFilterService', [function(){
    function singleProp(object) {
        return !object.hasOwnProperty('containing_object');
    }

    function multiProp(object) {
        return object.hasOwnProperty('containing_object');
    }

    return {
        singleProp: singleProp,
        multiProp: multiProp,
    };
}])

;
