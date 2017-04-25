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
                    var AddAvaibleSpotController = (function () {
                        function AddAvaibleSpotController() {
                        }
                        return AddAvaibleSpotController;
                    }());
                    AddAvaibleSpotController.$inject = ['$resource', '$uibModalInstance',];
                    EditAvailableSpot.AddAvaibleSpotController = AddAvaibleSpotController;
                })(EditAvailableSpot = ParkingSpace.EditAvailableSpot || (ParkingSpace.EditAvailableSpot = {}));
            })(ParkingSpace = Secret.ParkingSpace || (Secret.ParkingSpace = {}));
        })(Secret = Views.Secret || (Views.Secret = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=addAvailable.controller.js.map