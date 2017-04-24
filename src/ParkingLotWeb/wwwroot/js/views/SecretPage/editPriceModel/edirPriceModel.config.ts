namespace PrkingLotWeb.Views.Secret.EditPriceModel {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('EditPriceModel', <ng.ui.IState>{
                url: '/editPriceModel',
                templateUrl: '/js/views/SecretPage/editPriceModel/editPriceModel.view.html',
                controller: 'EditPriceModelController',
                controllerAs: 'vm'
            });
    }
}