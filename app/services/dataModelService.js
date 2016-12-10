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
        if (typeof item === 'string') {
            activeFieldGroup = { name: item };
        } else {
            activeFieldGroup = item;
        }
    }

    function getActiveFieldGroup() {
        return activeFieldGroup;
    }

    function setActiveField(item) {
        activeField = item;
        console.log(' infopanel baby', activeField)
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
