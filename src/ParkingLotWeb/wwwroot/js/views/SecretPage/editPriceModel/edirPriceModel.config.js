var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Secret;
        (function (Secret) {
            var EditPriceModel;
            (function (EditPriceModel) {
                Configuration.$inject = [
                    '$stateProvider'
                ];
                function Configuration($stateProvider) {
                    $stateProvider
                        .state('EditPriceModel', {
                        url: '/editPriceModel',
                        templateUrl: '/js/views/SecretPage/editPriceModel/editPriceModel.view.html',
                        controller: 'EditPriceModelController',
                        controllerAs: 'vm'
                    });
                }
                EditPriceModel.Configuration = Configuration;
            })(EditPriceModel = Secret.EditPriceModel || (Secret.EditPriceModel = {}));
        })(Secret = Views.Secret || (Views.Secret = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=edirPriceModel.config.js.map