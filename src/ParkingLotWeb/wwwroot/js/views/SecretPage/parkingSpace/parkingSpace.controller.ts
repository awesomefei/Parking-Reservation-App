namespace PrkingLotWeb.Views.Secret.ParkingSpace {
    export class ParkingSpaceModel{
        public id: number;
        public spaceNum: number;
        public zoon: string;
        public vehicleType: string;
    }

    export class ParkingSpaceController {
        static $inject = ['$resource', '$uibModal',];
        private allAvailableParkingSpace: Model.AvailableParkingSpot[];
        private allParkingSpace: ParkingSpaceModel[];
        private AvailableParkingSpaceResrouce: ng.resource.IResourceClass<Model.AvailableParkingSpot>;
        private ParkingSpaceResource: ng.resource.IResourceClass<ParkingSpaceModel>;

        constructor(
            private $resource: ng.resource.IResourceService,
            private $uibModal: ng.ui.bootstrap.IModalService,,
            
        ) {
            this.AvailableParkingSpaceResrouce = this.$resource<Model.AvailableParkingSpot>('api/availableParkingSpace/:id');
            this.ParkingSpaceResource = this.$resource<ParkingSpaceModel>('api/parkingSpace/:id');
            this.allAvailableParkingSpace = this.getAllAvailableParkingSpace();
            this.allParkingSpace = this.getAllParkingSpace();
        }

        public getAllAvailableParkingSpace() {
            return this.AvailableParkingSpaceResrouce.query();
        }

        public getAllParkingSpace() {
            return this.ParkingSpaceResource.query();
        }
        
        public create() {
            this.$uibModal.open({
                templateUrl: '/js/views/SecretPage/parkingSpace/editAvaibleParkingSpot/addAvaibleSpot.html',
                controller: 'AddAvaibleSpotController',
                controllerAs: "vm",
                size: 'lg'
            }).result.then((data) => {
                if (data.hasBeenEdited == true) {
                    this.getAllAvailableParkingSpace();
                }
            })
        }
    }
}