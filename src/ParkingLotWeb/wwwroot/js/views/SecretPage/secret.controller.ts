namespace PrkingLotWeb.Views.Secret {
    export class SecretController {
        static $inject = ['$resource', '$state', '$uibModal'];
        public priceModels: Model.PriceModel;
        private priceModelResource;
        private deleteForSure: boolean;
        private deletePriceId;
        constructor(
            private $resource: ng.resource.IResourceService,
            private $state: ng.ui.IStateService,
            private $uibModal: ng.ui.bootstrap.IModalService,


        ) {
            this.priceModelResource = this.$resource('api/priceModel/:id');
            this.priceModels = this.getAllPriceModels();
            this.deleteForSure = false;
            
        }

        getAllPriceModels() {
            return this.priceModelResource.query();
        }

        public edit(id) {
            this.$uibModal.open({
                templateUrl: '/js/views/SecretPage/editPriceModel/editPriceModel.view.html',
                controller: 'EditPriceModelController',
                controllerAs: "vm",
                resolve: {
                    priceModelId1: () => id,
                },
                size: 'lg'
            }).result.then((data) => {
                console.log(data);
                if (data.hasBeenEdited == true) {
                    this.getAllPriceModels();
                }
            })
        }

        test() {
            console.log('!!!!!!!!!!!');
            this.delete(this.deletePriceId);
        }
        passId(id: number) {
            console.log(id);
            this.deletePriceId = id;
            console.log('!!!!!!!!!!!!!!!deletePriceId is' + this.deletePriceId);

        }

        delete(id: number) {
            console.log('!!!!!!!!!!! delete entering');
            this.priceModelResource.delete({ id: id }).$promise
                .then((data) => {
                    this.getAllPriceModels();
                })
                .catch((data) => {
                    console.log(data);
                });
        }

    }
}