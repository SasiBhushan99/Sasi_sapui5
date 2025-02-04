sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.project1.controller.View1", {
        onInit() {
        },
        onPress: function(){
            this.getOwnerComponent().getRouter().navTo("RouteView2");
           },
        onSubmit: function(){
          var name =  this.getView().byId('_IDGenInput').getValue();
          var msg = "Welcome to " + name;
          this.getView().byId('_IDGenText1').setText(msg);
          this.getView().byId('_IDGenButton').setType('Reject');
          this.getView().byId('_IDGenText1').setTextAlign('Left');
          this.getView().byId('_IDGenInput').setEnabled(false);
          // to navigate to View 2
          this.getOwnerComponent().getRouter().navTo("RouteView2");
        }   
    });
});