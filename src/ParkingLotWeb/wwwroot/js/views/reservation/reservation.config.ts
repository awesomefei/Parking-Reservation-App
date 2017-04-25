namespace PrkingLotWeb.Views.Reservation {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Reservation', <ng.ui.IState>{
                url: '/',
                templateUrl: 'js/views/reservation/reservation.view.html',
                controller: 'ReservationController',
                controllerAs: 'vm'
            });
    }
}