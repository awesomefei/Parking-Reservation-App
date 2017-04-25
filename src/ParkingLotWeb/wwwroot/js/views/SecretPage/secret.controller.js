var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Secret;
        (function (Secret) {
            var SecretController = (function () {
                function SecretController($resource, $state, $uibModal) {
                    this.$resource = $resource;
                    this.$state = $state;
                    this.$uibModal = $uibModal;
                    this.priceModelResource = this.$resource('api/priceModel/:id');
                    this.getAllPriceModels();
                    this.deleteForSure = false;
                }
                SecretController.prototype.getAllPriceModels = function () {
                    return this.priceModels = this.priceModelResource.query();
                };
                SecretController.prototype.edit = function (id) {
                    var _this = this;
                    this.$uibModal.open({
                        templateUrl: '/js/views/SecretPage/editPriceModel/editPriceModel.view.html',
                        controller: 'EditPriceModelController',
                        controllerAs: "vm",
                        resolve: {
                            priceModelId1: function () { return id; },
                        },
                        size: 'lg'
                    }).result.then(function (data) {
                        if (data.hasBeenEdited == true) {
                            _this.getAllPriceModels();
                        }
                    });
                };
                SecretController.prototype.test = function () {
                    this.delete(this.deletePriceId);
                };
                SecretController.prototype.passId = function (id) {
                    this.deletePriceId = id;
                };
                SecretController.prototype.delete = function (id) {
                    var _this = this;
                    this.priceModelResource.delete({ id: id }).$promise
                        .then(function (data) {
                        _this.getAllPriceModels();
                    })
                        .catch(function (data) {
                        console.log(data);
                    });
                };
                return SecretController;
            }());
            SecretController.$inject = ['$resource', '$state', '$uibModal'];
            Secret.SecretController = SecretController;
        })(Secret = Views.Secret || (Views.Secret = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=secret.controller.js.map