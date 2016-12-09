'use strict';

function InfoPanelCtrl() {
  console.log(' infopanel baby')
}

angular.module('ba.infoPanel', [])

.component('infoPanel', {
  templateUrl: '/components/info-panel/infoPanel.html',
  controller: InfoPanelCtrl,
  bindings: {
    info: '='
  }
})

;
