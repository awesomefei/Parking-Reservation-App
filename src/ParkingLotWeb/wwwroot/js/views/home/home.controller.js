var PrkingLotWeb;
(function (PrkingLotWeb) {
    var Views;
    (function (Views) {
        var Home;
        (function (Home) {
            var HomeController = (function () {
                function HomeController() {
                    this.message = 'Hello from HomeController';
                }
                return HomeController;
            }());
            HomeController.$inject = [];
            Home.HomeController = HomeController;
        })(Home = Views.Home || (Views.Home = {}));
    })(Views = PrkingLotWeb.Views || (PrkingLotWeb.Views = {}));
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=home.controller.js.map