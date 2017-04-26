var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Reservation;
        (function (Reservation) {
            Configuration.$inject = [
                '$stateProvider'
            ];
            function Configuration($stateProvider) {
                $stateProvider
                    .state('Reservation', {
                    url: '/reservation',
                    templateUrl: 'js/views/reservation/reservation.view.html',
                    controller: 'ReservationController',
                    controllerAs: 'vm'
                });
            }
            Reservation.Configuration = Configuration;
        })(Reservation = Views.Reservation || (Views.Reservation = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=reservation.config.js.map