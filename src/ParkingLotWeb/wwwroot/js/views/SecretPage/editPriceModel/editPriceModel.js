var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Secret;
        (function (Secret) {
            var EditPriceModel;
            (function (EditPriceModel) {
                var module = angular.module('app.editPriceModel', []);
                module.config(EditPriceModel.Configuration);
                module.controller('EditPriceModelController', EditPriceModel.EditPriceModelController);
            })(EditPriceModel = Secret.EditPriceModel || (Secret.EditPriceModel = {}));
        })(Secret = Views.Secret || (Views.Secret = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=editPriceModel.js.map