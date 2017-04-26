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
                    function ParkingSpaceController($resource, $uibModal) {
                        this.$resource = $resource;
                        this.$uibModal = $uibModal;
                        this.AvailableParkingSpaceResrouce = this.$resource('api/availableParkingSpace/:id');
                        this.ParkingSpaceResource = this.$resource('api/parkingSpace/:id');
                        this.getAllAvailableParkingSpace();
                        this.getAllParkingSpace();
                    }
                    ParkingSpaceController.prototype.getAllAvailableParkingSpace = function () {
                        return this.allAvailableParkingSpace = this.AvailableParkingSpaceResrouce.query();
                    };
                    ParkingSpaceController.prototype.getAllParkingSpace = function () {
                        return this.allParkingSpace = this.ParkingSpaceResource.query();
                    };
                    ParkingSpaceController.prototype.create = function () {
                        var _this = this;
                        this.$uibModal.open({
                            templateUrl: '/js/views/SecretPage/parkingSpace/editeAvaibleParkingSpot/addAvaibleSpot.html',
                            controller: 'AddAvaibleSpotController',
                            controllerAs: "vm",
                            size: 'lg'
                        }).result.then(function (data) {
                            if (data.hasBeenEdited == true) {
                                _this.getAllAvailableParkingSpace();
                            }
                        });
                    };
                    return ParkingSpaceController;
                }());
                ParkingSpaceController.$inject = ['$resource', '$uibModal',];
                ParkingSpace.ParkingSpaceController = ParkingSpaceController;
            })(ParkingSpace = Secret.ParkingSpace || (Secret.ParkingSpace = {}));
        })(Secret = Views.Secret || (Views.Secret = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=parkingSpace.controller.js.map