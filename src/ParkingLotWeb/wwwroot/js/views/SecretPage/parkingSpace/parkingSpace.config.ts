namespace PrkingLotWeb.Views.Secret.ParkingSpace {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('ParkingSpace', <ng.ui.IState>{
                url: '/secret/parkingspace',
                templateUrl: '/js/views/SecretPage/parkingSpace/parkingSpace.view.html',
                controller: 'ParkingSpaceController',
                controllerAs: 'vm'
            });
    }
}