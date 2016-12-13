'use strict';

function InfoSectionCtrl(DataModel) {
  this.getActiveFieldGroup = DataModel.getActiveFieldGroup;
  this.getActiveField = DataModel.getActiveField;
}

angular.module('ba.infoSection', [])

.component('infoSection', {
  templateUrl: '/components/info-section/infoSection.html',
  controller: [
    'DataModel',
    InfoSectionCtrl
  ],
})

;
