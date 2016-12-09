'use strict';

function NavigatorCtrl(dataFilterService) {
  this.singleProp = dataFilterService.singleProp;
  this.multiProp = dataFilterService.multiProp;
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
