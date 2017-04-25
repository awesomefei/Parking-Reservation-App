var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Reservation;
        (function (Reservation) {
            var ReservationController = (function () {
                function ReservationController() {
                    this.message = 'Hello from ReservationController';
                }
                return ReservationController;
            }());
            ReservationController.$inject = [];
            Reservation.ReservationController = ReservationController;
        })(Reservation = Views.Reservation || (Views.Reservation = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=reservation.controller.js.map