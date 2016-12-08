'use strict';

angular.module('basicAdmin')

.service('DataService', ['$http', function($http){
    function getData() {
        return $http.get('/data/schema.json');
    }

    function setDataItems(items) {
        dataItems = items;
    }

    function getDataItems() {
        return dataItems;
    }

    var dataItems = [];

    return {
        getData: getData,
        setDataItems: setDataItems,
        getDataItems: getDataItems,
    };
}])

;
