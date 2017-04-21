var PrkingLotWeb;
(function (PrkingLotWeb) {
    var module = angular.module('app', [
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'app.services',
        'app.views'
    ]);
    module.config(PrkingLotWeb.Configuration);
    //module.run(Run);
})(PrkingLotWeb || (PrkingLotWeb = {}));
//# sourceMappingURL=app.js.map