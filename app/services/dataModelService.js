'use strict';

angular.module('basicAdmin')

.service('DataModel', [
    'DataFilters',
    function(DataFilters){
        function setDataItems(items) {
            dataItems = items;
        }

        function getDataItems() {
            return dataItems;
        }

        function processData(unprocessedData) {
            var processedData = unprocessedData.filter(DataFilters.multiProp);
            var singleProps = unprocessedData.filter(DataFilters.singleProp)

            processedData.unshift({
                name: 'general',
                'containing_object': {
                    properties: singleProps
                }
            });

            return processedData;
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
            processData: processData,
            setActiveFieldGroup: setActiveFieldGroup,
            getActiveFieldGroup: getActiveFieldGroup,
            setActiveField: setActiveField,
            getActiveField: getActiveField,
        };
}])

;
