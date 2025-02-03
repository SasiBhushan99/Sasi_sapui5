sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.project1.controller.View1", {
        onInit() {
        },
        onPress: function(){
         this.getOwnerComponent().getRouter().navto("RouteView2")
        }
    });
});