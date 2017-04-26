namespace PrkingLotWeb.Views.Reservation {
    export class ReservationController {
        static $inject = ['$resource'];
        public message = 'Hello from ReservationController';
        private priceModelResource;
        private availableSpotResource: ng.resource.IResourceClass<Model.AvailableParkingSpot>;
        private allPriceModel;
        private newReserveSpot: Model.UnavailableParkingSpot;

        constructor(
            private $resource: ng.resource.IResourceService,
        ) {
            this.priceModelResource = $resource('api/priceModel/:id');
            this.availableSpotResource = $resource<Model.AvailableParkingSpot>('api/availableParkingSpace/:id');
            this.getAllPriceModel();
        }

        getAllPriceModel() {
            this.allPriceModel = this.priceModelResource.query();
        }

        reserveSingleAvailableSpot(newReserveSpot: Model.UnavailableParkingSpot) {


        }
    }
}