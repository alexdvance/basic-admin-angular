'use strict';

function InfoPanelCtrl(DataModel) {
  this.getActiveFieldGroup = DataModel.getActiveFieldGroup;
  this.getActiveField = DataModel.getActiveField;
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
