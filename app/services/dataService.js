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

    function setActiveItem(item) {
        activeItem = item;
    }

    function getActiveItem() {
        return activeItem;
    }

    var dataItems = [];
    var activeItem = {};

    return {
        getData: getData,
        setDataItems: setDataItems,
        getDataItems: getDataItems,
        setActiveItem: setActiveItem,
        getActiveItem: getActiveItem,
    };
}])

;
