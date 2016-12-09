'use strict';

angular.module('basicAdmin')

.service('DataAPI', ['$http', function($http){
    function getData() {
        return $http.get('/data/schema.json');
    }

    return {
        getData: getData,
    };
}])

;
