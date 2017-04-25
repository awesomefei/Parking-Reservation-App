var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Secret;
        (function (Secret) {
            var ParkingSpace;
            (function (ParkingSpace) {
                var ParkingSpaceModel = (function () {
                    function ParkingSpaceModel() {
                    }
                    return ParkingSpaceModel;
                }());
                ParkingSpace.ParkingSpaceModel = ParkingSpaceModel;
                var ParkingSpaceController = (function () {
                    function ParkingSpaceController($resource) {
                        this.$resource = $resource;
                        this.AvailableParkingSpaceResrouce = this.$resource('api/availableParkingSpace/:id');
                        this.ParkingSpaceResource = this.$resource('api/parkingSpace/:id');
                        this.allAvailableParkingSpace = this.getAllAvailableParkingSpace();
                        this.allParkingSpace = this.getAllParkingSpace();
                    }
                    ParkingSpaceController.prototype.getAllAvailableParkingSpace = function () {
                        return this.AvailableParkingSpaceResrouce.query();
                    };
                    ParkingSpaceController.prototype.getAllParkingSpace = function () {
                        return this.ParkingSpaceResource.query();
                    };
                    ParkingSpaceController.prototype.postaNewAvaiableSpot = function () {
                    };
                    return ParkingSpaceController;
                }());
                ParkingSpaceController.$inject = ['$resource',];
                ParkingSpace.ParkingSpaceController = ParkingSpaceController;
            })(ParkingSpace = Secret.ParkingSpace || (Secret.ParkingSpace = {}));
        })(Secret = Views.Secret || (Views.Secret = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=parkingSpace.controller.js.map