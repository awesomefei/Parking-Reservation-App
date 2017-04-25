var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Reservation;
        (function (Reservation) {
            var module = angular.module('app.reservation', []);
            module.config(Reservation.Configuration);
            module.controller('ReservationController', Reservation.ReservationController);
        })(Reservation = Views.Reservation || (Views.Reservation = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=reservation.js.map