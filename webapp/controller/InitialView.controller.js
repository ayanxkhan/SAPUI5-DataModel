sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (Controller,JSONModel,ResourceModel) => {
    "use strict";

    return Controller.extend("datamodeldatabinding.controller.InitialView", {
        onInit() {


            // JSONModel and Binding
            // var oData = {
            //     employees : {
            //         name : "Ayan Khan",
            //         role : "UI5 Developer"
            //     }
            // };

            // var oModel = new JSONModel(oData);
            // this.getView().setModel(oModel);


            // ResourceModel and Binding
            var oResModel = new ResourceModel({
                bundleName : "datamodeldatabinding.i18n.i18n"
            });
            this.getView().setModel(oResModel,"i18n");

            // oDataModel
            // var oModel = new oDataModel("");
            // this.getView().setModel(oModel);




        
        
        
        
        }
    });
});