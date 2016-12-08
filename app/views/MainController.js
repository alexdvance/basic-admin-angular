'use strict';

angular.module('basicAdmin')

.controller('MainCtrl', [
  '$scope',
  'DataService',
  function($scope, DataService){
    DataService.getData().then(function(response) {
      DataService.setDataItems(response.data);

      console.log('items', DataService.getDataItems())
    });
    $scope.test = null;

    console.log('Up and running!');
}])

;
