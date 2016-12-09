'use strict';

function NavigatorCtrl() {
  console.log(' nav baby')
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
