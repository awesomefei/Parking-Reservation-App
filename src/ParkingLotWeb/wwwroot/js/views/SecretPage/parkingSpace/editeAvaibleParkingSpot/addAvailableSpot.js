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
                    var module = angular.module('app.addAvailableSpot', []);
                    module.config(EditAvailableSpot.Configuration);
                    module.controller('AddAvaibleSpotController', EditAvailableSpot.AddAvaibleSpotController);
                })(EditAvailableSpot = ParkingSpace.EditAvailableSpot || (ParkingSpace.EditAvailableSpot = {}));
            })(ParkingSpace = SecretPage.ParkingSpace || (SecretPage.ParkingSpace = {}));
        })(SecretPage = Views.SecretPage || (Views.SecretPage = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=addAvailableSpot.js.map