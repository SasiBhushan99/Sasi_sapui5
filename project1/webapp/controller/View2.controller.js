sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.project1.controller.View2", {
        onInit() {
        },
        onPress: function(){
           // this.getOwnerComponent().getRouter().navTo('RouteView1');
           history.go(-1);
        }
    });
});