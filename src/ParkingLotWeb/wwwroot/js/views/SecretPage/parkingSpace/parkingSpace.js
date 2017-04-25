var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Secret;
        (function (Secret) {
            var ParkingSpace;
            (function (ParkingSpace) {
                var module = angular.module('app.parkingSpace', []);
                module.config(ParkingSpace.Configuration);
                module.controller('ParkingSpaceController', ParkingSpace.ParkingSpaceController);
            })(ParkingSpace = Secret.ParkingSpace || (Secret.ParkingSpace = {}));
        })(Secret = Views.Secret || (Views.Secret = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=parkingSpace.js.map