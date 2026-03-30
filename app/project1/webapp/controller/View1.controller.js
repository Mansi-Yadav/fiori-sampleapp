sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("project1.controller.View1", {

    onInit: function () {
      // Called when view loads
      console.log("View Initialized");
    },

    onRefresh: function () {
      const oModel = this.getView().getModel();

      if (oModel) {
        oModel.refresh();
        MessageToast.show("Data refreshed");
      } else {
        MessageToast.show("Model not found");
      }
    }

  });
});