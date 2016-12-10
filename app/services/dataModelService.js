'use strict';

angular.module('basicAdmin')

.service('DataModel', [function(){
    function setDataItems(items) {
        dataItems = items;
    }

    function getDataItems() {
        return dataItems;
    }

    function setActiveFieldGroup(item) {
        activeFieldGroup = item;
    }

    function getActiveFieldGroup() {
        return activeFieldGroup;
    }

    function setActiveField(item) {
        activeField = item;
    }

    function getActiveField() {
        return activeField;
    }

    var dataItems = [];
    var activeFieldGroup = {};
    var activeField = {};

    return {
        setDataItems: setDataItems,
        getDataItems: getDataItems,
        setActiveFieldGroup: setActiveFieldGroup,
        getActiveFieldGroup: getActiveFieldGroup,
        setActiveField: setActiveField,
        getActiveField: getActiveField,
    };
}])

;
