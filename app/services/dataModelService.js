'use strict';

angular.module('basicAdmin')

.service('DataModel', [function(){
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
        setDataItems: setDataItems,
        getDataItems: getDataItems,
        setActiveItem: setActiveItem,
        getActiveItem: getActiveItem,
    };
}])

;
