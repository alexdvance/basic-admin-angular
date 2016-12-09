'use strict';

angular.module('basicAdmin')

.controller('MainCtrl', [
  '$scope',
  'DataService',
  function($scope, DataService){
    DataService.getData().then(function(response) {
      DataService.setDataItems(response.data);
      DataService.setActiveItem(response.data[0]);

      console.log('items', DataService.getDataItems())
      $scope.items = DataService.getDataItems();
      $scope.activeItem = DataService.getActiveItem();
    });

    console.log('Up and running!');
}])

;
