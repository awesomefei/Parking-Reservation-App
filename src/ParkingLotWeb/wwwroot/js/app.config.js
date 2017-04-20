var PrkingLotWeb;
(function (PrkingLotWeb) {
    Configuration.$inject = [
        '$locationProvider',
        '$urlRouterProvider'
    ];
    function Configuration($locationProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
    PrkingLotWeb.Configuration = Configuration;
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=app.config.js.map