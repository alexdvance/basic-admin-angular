'use strict';

angular.module('basicAdmin')

.controller('MainCtrl', [
  '$scope',
  'DataModel',
  'DataAPI',
  function($scope, DataModel, DataAPI){
    DataAPI.getData().then(function(response) {
      DataModel.setDataItems(response.data);

      $scope.items = DataModel.getDataItems();
    });
}])

;
