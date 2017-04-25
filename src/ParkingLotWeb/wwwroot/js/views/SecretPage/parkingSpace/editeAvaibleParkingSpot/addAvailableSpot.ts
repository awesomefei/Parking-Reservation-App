namespace PrkingLotWeb.Views.SecretPage.ParkingSpace.EditAvailableSpot {
    let module: ng.IModule = angular.module('app.addAvailableSpot', []);

    module.config(EditAvailableSpot.Configuration);

    module.controller('AddAvaibleSpotController', AddAvaibleSpotController);
}