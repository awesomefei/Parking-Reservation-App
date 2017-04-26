var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Reservation;
        (function (Reservation) {
            var ReservationController = (function () {
                function ReservationController($resource) {
                    this.$resource = $resource;
                    this.message = 'Hello from ReservationController';
                    this.priceModelResource = $resource('api/priceModel/:id');
                    this.availableSpotResource = $resource('api/availableParkingSpace/:id');
                    this.getAllPriceModel();
                }
                ReservationController.prototype.getAllPriceModel = function () {
                    this.allPriceModel = this.priceModelResource.query();
                };
                ReservationController.prototype.reserveSingleAvailableSpot = function (newReserveSpot) {
                };
                return ReservationController;
            }());
            ReservationController.$inject = ['$resource'];
            Reservation.ReservationController = ReservationController;
        })(Reservation = Views.Reservation || (Views.Reservation = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=reservation.controller.js.map