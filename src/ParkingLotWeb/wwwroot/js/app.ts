namespace PrkingLotWeb {
    let module: ng.IModule = angular.module('app', [
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'app.views',

    ])
    module.config(Configuration);
    //module.run(Run);
}