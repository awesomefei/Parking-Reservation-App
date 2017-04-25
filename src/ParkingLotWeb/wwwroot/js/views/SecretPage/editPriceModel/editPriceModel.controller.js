var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Secret;
        (function (Secret) {
            var EditPriceModel;
            (function (EditPriceModel) {
                var EditPriceModelController = (function () {
                    function EditPriceModelController($resource, $uibModalInstance, $state, priceModelId) {
                        this.$resource = $resource;
                        this.$uibModalInstance = $uibModalInstance;
                        this.$state = $state;
                        this.priceModelId = priceModelId;
                        this.validationErrors = [];
                        this.priceModelResource = this.$resource('api/priceModel/:id', null, {
                            'update': {
                                method: 'PUT'
                            }
                        });
                        this.getSinglePriceModel(priceModelId);
                        this.hasBeenEdited = false;
                    }
                    EditPriceModelController.prototype.getSinglePriceModel = function (id) {
                        return this.singlePriceModel = this.priceModelResource.get({ id: id });
                    };
                    EditPriceModelController.prototype.getAllPriceModels = function () {
                        return this.priceModelResource.query();
                    };
                    EditPriceModelController.prototype.update = function (id) {
                        var _this = this;
                        id = this.priceModelId;
                        this.priceModelResource.update({ id: id }, this.newSinglePriceModel).$promise
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
                    EditPriceModelController.prototype.closeModal = function () {
                        this.$uibModalInstance.close({ hasBeenEdited: this.hasBeenEdited });
                    };
                    EditPriceModelController.prototype.clearForm = function () {
                        this.singlePriceModel = new PrkingLotWeb.Model.PriceModel();
                        this.validationErrors = [];
                    };
                    return EditPriceModelController;
                }());
                EditPriceModelController.$inject = ['$resource', '$uibModalInstance', '$state', 'priceModelId1'];
                EditPriceModel.EditPriceModelController = EditPriceModelController;
            })(EditPriceModel = Secret.EditPriceModel || (Secret.EditPriceModel = {}));
        })(Secret = Views.Secret || (Views.Secret = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=editPriceModel.controller.js.map