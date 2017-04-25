var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Secret;
        (function (Secret) {
            var ParkingSpace;
            (function (ParkingSpace) {
                Configuration.$inject = [
                    '$stateProvider'
                ];
                function Configuration($stateProvider) {
                    $stateProvider
                        .state('ParkingSpace', {
                        url: '/secret/parkingspace',
                        templateUrl: '/js/views/SecretPage/parkingSpace/parkingSpace.view.html',
                        controller: 'ParkingSpaceController',
                        controllerAs: 'vm'
                    });
                }
                ParkingSpace.Configuration = Configuration;
            })(ParkingSpace = Secret.ParkingSpace || (Secret.ParkingSpace = {}));
        })(Secret = Views.Secret || (Views.Secret = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=parkingSpace.config.js.map