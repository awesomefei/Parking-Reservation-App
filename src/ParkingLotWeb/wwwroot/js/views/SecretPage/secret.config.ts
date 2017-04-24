namespace PrkingLotWeb.Views.Secret {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Secret', <ng.ui.IState>{
                url: '/secret',
                templateUrl: 'js/views/SecretPage/secret.view.html',
                controller: 'SecretController',
                controllerAs: 'vm'
            });
    }
}