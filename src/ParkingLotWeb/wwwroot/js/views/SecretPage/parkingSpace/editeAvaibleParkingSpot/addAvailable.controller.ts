namespace PrkingLotWeb.Views.SecretPage.ParkingSpace.EditAvailableSpot {
    export class AddAvaibleSpotController {
        static $inject = ['$resource', '$uibModalInstance'];

        private newAvailableSpot: Model.AvailableParkingSpot;
        private availableSpotResource;
        private parkingSpaceResource;
        private hasBeenEdited;
        private allParkingSpace: Secret.ParkingSpace.ParkingSpaceModel;
        public validationErrors: string[] = [];

        constructor(
            private $resource: ng.resource.IResourceService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
        ) {
            this.availableSpotResource = this.$resource('api/availableParkingSpace/:id');
            this.parkingSpaceResource = this.$resource('api/parkingSpace/:id');
            this.hasBeenEdited = false;
            this.allParkingSpace = this.getAllParkingSpace();
        }
        getAllParkingSpace() {
            return this.parkingSpaceResource.query();
        }
        closeModal() {
            this.$uibModalInstance.close({ hasBeenEdited: this.hasBeenEdited });
        }
        createANewAvailableSpot(newAvailableSpot: Model.AvailableParkingSpot) {
            newAvailableSpot = this.newAvailableSpot;
            this.availableSpotResource.save(newAvailableSpot).$promise
                .then((data) => {
                    this.hasBeenEdited = true;
                    this.closeModal();
                })
                .catch((response: any) => {
                    for (let prop in response.data) {
                        this.validationErrors.push(`${prop} - ${response.data[prop]}`);
                    }
                });
        }

    }
}