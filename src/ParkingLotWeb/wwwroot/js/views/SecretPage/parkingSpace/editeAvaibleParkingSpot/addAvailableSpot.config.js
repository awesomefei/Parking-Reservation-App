var AuctionApp;
(function (AuctionApp) {
    var Views;
    (function (Views) {
        var Secret;
        (function (Secret) {
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
            })(ParkingSpace = Secret.ParkingSpace || (Secret.ParkingSpace = {}));
        })(Secret = Views.Secret || (Views.Secret = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=addAvailableSpot.config.js.map