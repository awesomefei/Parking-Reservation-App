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
                    var AddAvaibleSpotController = (function () {
                        function AddAvaibleSpotController($resource, $uibModalInstance) {
                            this.$resource = $resource;
                            this.$uibModalInstance = $uibModalInstance;
                            this.validationErrors = [];
                            this.availableSpotResource = this.$resource('api/availableParkingSpace/:id');
                            this.parkingSpaceResource = this.$resource('api/parkingSpace/:id');
                            this.hasBeenEdited = false;
                            this.allParkingSpace = this.getAllParkingSpace();
                        }
                        AddAvaibleSpotController.prototype.getAllParkingSpace = function () {
                            return this.parkingSpaceResource.query();
                        };
                        AddAvaibleSpotController.prototype.closeModal = function () {
                            this.$uibModalInstance.close({ hasBeenEdited: this.hasBeenEdited });
                        };
                        AddAvaibleSpotController.prototype.createANewAvailableSpot = function (newAvailableSpot) {
                            var _this = this;
                            newAvailableSpot = this.newAvailableSpot;
                            this.availableSpotResource.save(newAvailableSpot).$promise
                                .then(function (data) {
                                _this.hasBeenEdited = true;
                                _this.closeModal();
                            })
                                .catch(function (response) {
                                for (var prop in response.data) {
                                    _this.validationErrors.push(prop + " - " + response.data[prop]);
                                }
                            });
                        };
                        return AddAvaibleSpotController;
                    }());
                    AddAvaibleSpotController.$inject = ['$resource', '$uibModalInstance'];
                    EditAvailableSpot.AddAvaibleSpotController = AddAvaibleSpotController;
                })(EditAvailableSpot = ParkingSpace.EditAvailableSpot || (ParkingSpace.EditAvailableSpot = {}));
            })(ParkingSpace = SecretPage.ParkingSpace || (SecretPage.ParkingSpace = {}));
        })(SecretPage = Views.SecretPage || (Views.SecretPage = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=addAvailable.controller.js.map