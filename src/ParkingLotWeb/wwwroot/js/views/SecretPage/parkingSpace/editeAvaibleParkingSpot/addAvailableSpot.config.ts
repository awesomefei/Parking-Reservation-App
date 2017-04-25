namespace PrkingLotWeb.Views.SecretPage.ParkingSpace.EditAvailableSpot {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('AddAvailableSpot', <ng.ui.IState>{
                url: '/addAvaibleSpot',
                templateUrl: '/js/views/SecretPage/parkingSpace/editAvaibleParkingSpot/addAvaibleSpot.html',
                controller: 'AddAvaibleSpotController',
                controllerAs: 'vm'
            });
    }
}