var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Secret;
        (function (Secret) {
            Configuration.$inject = [
                '$stateProvider'
            ];
            function Configuration($stateProvider) {
                $stateProvider
                    .state('Secret', {
                    url: '/secret',
                    templateUrl: 'js/views/SecretPage/secret.view.html',
                    controller: 'SecretController',
                    controllerAs: 'vm'
                });
            }
            Secret.Configuration = Configuration;
        })(Secret = Views.Secret || (Views.Secret = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=secret.config.js.map