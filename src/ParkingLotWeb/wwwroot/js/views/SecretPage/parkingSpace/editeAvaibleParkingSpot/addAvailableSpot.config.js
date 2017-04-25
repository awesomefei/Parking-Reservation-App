var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var SecretPage;
        (function (SecretPage) {
            var ParkingSpace;
            (function (ParkingSpace) {
                var EditAvailableSpot;
                (function (EditAvailableSpot) {
                    Configuration.$inject = [
                        '$stateProvider'
                    ];
                    function Configuration($stateProvider) {
                        $stateProvider
                            .state('AddAvailableSpot', {
                            url: '/addAvaibleSpot',
                            templateUrl: '/js/views/SecretPage/parkingSpace/editAvaibleParkingSpot/addAvaibleSpot.html',
                            controller: 'AddAvaibleSpotController',
                            controllerAs: 'vm'
                        });
                    }
                    EditAvailableSpot.Configuration = Configuration;
                })(EditAvailableSpot = ParkingSpace.EditAvailableSpot || (ParkingSpace.EditAvailableSpot = {}));
            })(ParkingSpace = SecretPage.ParkingSpace || (SecretPage.ParkingSpace = {}));
        })(SecretPage = Views.SecretPage || (Views.SecretPage = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=addAvailableSpot.config.js.map