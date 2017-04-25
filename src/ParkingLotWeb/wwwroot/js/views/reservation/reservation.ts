namespace PrkingLotWeb.Views.Reservation {
    let module: ng.IModule = angular.module('app.reservation', []);

    module.config(Reservation.Configuration);

    module.controller('ReservationController', ReservationController);
}