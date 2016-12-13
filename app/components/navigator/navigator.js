'use strict';

angular.module('ba.navigator', [
  'duScroll',
])

.directive('navigator', function() {
  return {
    templateUrl: '/components/navigator/navigator.html',
    controllerAs: '$ctrl',
    controller: 'NavigatorCtrl',
    scope: {
      items: '='
    },
    bindToController: true,
    link: function($scope) {
    }
  };
})

.controller('NavigatorCtrl', [
  '$scope',
  'DataModel',
  function($scope, DataModel) {
    this.setActiveFieldGroup = DataModel.setActiveFieldGroup;
    this.getActiveFieldGroup = DataModel.getActiveFieldGroup;
    this.setActiveField = DataModel.setActiveField;
    this.getActiveField = DataModel.getActiveField;

    this.scrollToTarget = function(id) {
      var containerEl = document.getElementById('info-section');
      var targetEl = document.getElementById(id);
      angular.element(containerEl).scrollToElementAnimated(targetEl, 20, 400);
    }
}])

;
