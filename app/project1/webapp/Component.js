// sap.ui.define(
//     ["sap/fe/core/AppComponent"],
//     function (Component) {
//         "use strict";

//         return Component.extend("project1.Component", {
//             metadata: {
//                 manifest: "json"
//             }
//         });
//     }
// );

sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/odata/v4/ODataModel"
], function (UIComponent, ODataModel) {
  "use strict";

  return UIComponent.extend("demo.Component", {

    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      // Create OData V4 Model
      const oModel = new ODataModel({
        serviceUrl: "/odata/v4/catalog/"
      });

      this.setModel(oModel);
    }
  });
});