'use strict';

function NavigatorCtrl(DataModel, DataFilters) {
  this.singleProp = DataFilters.singleProp;
  this.multiProp = DataFilters.multiProp;

  this.setActiveFieldGroup = DataModel.setActiveFieldGroup;
  this.getActiveFieldGroup = DataModel.getActiveFieldGroup;
}

angular.module('ba.navigator', [])

.component('navigator', {
  templateUrl: '/components/navigator/navigator.html',
  controller: NavigatorCtrl,
  bindings: {
    items: '='
  }
})

;
