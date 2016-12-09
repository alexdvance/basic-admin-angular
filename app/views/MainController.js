'use strict';

angular.module('basicAdmin')

.controller('MainCtrl', [
  '$scope',
  'DataAPI',
  function($scope, DataAPI){
    DataAPI.getData().then(function(response) {
      DataAPI.setDataItems(response.data);
      DataAPI.setActiveItem(response.data[0]);

      console.log('items', DataAPI.getDataItems())
      $scope.items = DataAPI.getDataItems();
      $scope.activeItem = DataAPI.getActiveItem();
    });

    console.log('Up and running!');
}])

;
