'use strict';

angular.module('basicAdmin')

.service('DataFilters', [function(){
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
