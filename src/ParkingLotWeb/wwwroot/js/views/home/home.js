var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Home;
        (function (Home) {
            var module = angular.module('app.home', []);
            module.config(Home.Configuration);
            module.controller('HomeController', Home.HomeController);
        })(Home = Views.Home || (Views.Home = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=home.js.map