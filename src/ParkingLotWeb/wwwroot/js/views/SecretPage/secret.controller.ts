namespace PrkingLotWeb.Views.Secret {
    export class SecretController {
        static $inject = ['$resource', '$state', '$uibModal'];
        public priceModels: Model.PriceModel;
        private priceModelResource;

        constructor(
            private $resource: ng.resource.IResourceService,
            private $state: ng.ui.IStateService,
            private $uibModal: ng.ui.bootstrap.IModalService,


        ) {
            this.priceModelResource = this.$resource('api/priceModel/:id');
            this.priceModels = this.getAllPriceModels();
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

        delete(id) {
            this.priceModelResource.delete({ id: id });
        }

    }
}