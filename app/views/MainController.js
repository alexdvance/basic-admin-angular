'use strict';

angular.module('basicAdmin')

.controller('MainCtrl', [
  '$scope',
  'DataModel',
  'DataAPI',
  function($scope, DataModel, DataAPI){
    DataAPI.getData().then(function(response) {
      DataModel.setDataItems(response.data);
      DataModel.setActiveItem(response.data[0]);

      console.log('items', DataModel.getDataItems())
      $scope.items = DataModel.getDataItems();
      $scope.activeItem = DataModel.getActiveItem();
    });

    console.log('Up and running!');
}])

;
