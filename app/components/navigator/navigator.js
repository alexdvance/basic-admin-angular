'use strict';

function NavigatorCtrl(DataFilters) {
  this.singleProp = DataFilters.singleProp;
  this.multiProp = DataFilters.multiProp;
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
