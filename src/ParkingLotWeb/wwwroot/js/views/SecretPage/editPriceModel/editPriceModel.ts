namespace PrkingLotWeb.Views.Secret.EditPriceModel {
    let module: ng.IModule = angular.module('app.editPriceModel', []);

    module.config(EditPriceModel.Configuration);

    module.controller('EditPriceModelController', EditPriceModelController);
}