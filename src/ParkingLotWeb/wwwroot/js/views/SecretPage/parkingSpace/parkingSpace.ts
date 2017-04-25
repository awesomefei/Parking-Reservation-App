namespace PrkingLotWeb.Views.Secret.ParkingSpace {
    let module: ng.IModule = angular.module('app.parkingSpace', []);

    module.config(ParkingSpace.Configuration);

    module.controller('ParkingSpaceController', ParkingSpaceController);
}