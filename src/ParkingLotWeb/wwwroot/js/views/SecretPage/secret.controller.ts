﻿namespace PrkingLotWeb.Views.Secret {
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
             this.getAllPriceModels();
            this.deleteForSure = false;
            
        }

        getAllPriceModels() {
            return this.priceModels = this.priceModelResource.query();
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
                if (data.hasBeenEdited == true) {
                    this.getAllPriceModels();
                }
            })
        }

        test() {
            this.delete(this.deletePriceId);
        }
        passId(id: number) {
            this.deletePriceId = id;

        }

        delete(id: number) {
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