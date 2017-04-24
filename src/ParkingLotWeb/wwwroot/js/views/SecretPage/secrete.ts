namespace PrkingLotWeb.Views.Secret {
    let module: ng.IModule = angular.module('app.secret', []);

    module.config(Secret.Configuration);

    module.controller('SecretController', SecretController);
}