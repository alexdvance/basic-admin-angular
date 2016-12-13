'use strict';

angular.module('basicAdmin')

.controller('MainCtrl', [
  '$scope',
  'DataModel',
  'DataAPI',
  function($scope, DataModel, DataAPI){
    DataAPI.getData().then(function(response) {
      var processedData = DataModel.processData(response.data);
      DataModel.setDataItems(processedData);

      $scope.items = DataModel.getDataItems();
    });
}])

;
