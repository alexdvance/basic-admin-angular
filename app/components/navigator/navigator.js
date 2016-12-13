'use strict';

function NavigatorCtrl(DataModel) {
  this.setActiveFieldGroup = DataModel.setActiveFieldGroup;
  this.getActiveFieldGroup = DataModel.getActiveFieldGroup;
  this.setActiveField = DataModel.setActiveField;
  this.getActiveField = DataModel.getActiveField;
}

angular.module('ba.navigator', [])

.component('navigator', {
  templateUrl: '/components/navigator/navigator.html',
  controller: [
    'DataModel',
    NavigatorCtrl
  ],
  bindings: {
    items: '='
  }
})

;
