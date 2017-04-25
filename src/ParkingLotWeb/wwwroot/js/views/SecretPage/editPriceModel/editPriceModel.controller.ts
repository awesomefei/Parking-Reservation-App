namespace PrkingLotWeb.Views.Secret.EditPriceModel {
    export class EditPriceModelController {
        static $inject = ['$resource', '$uibModalInstance', '$state', 'priceModelId1'];
        private priceModelResource;
        private hasBeenEdited;
        public singlePriceModel: Model.PriceModel;
        public validationErrors: string[] = [];
        private newSinglePriceModel: Model.PriceModel;

        constructor(
            private $resource: ng.resource.IResourceService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            private $state: ng.ui.IStateService,
            public priceModelId,

        ) {
            this.priceModelResource = this.$resource('api/priceModel/:id', null, {
                'update': {
                    method: 'PUT'
                }
            });
            this.getSinglePriceModel(priceModelId);
            this.hasBeenEdited = false;

        }

        getSinglePriceModel(id): Model.PriceModel{
            return this.singlePriceModel = this.priceModelResource.get({ id: id });
        }

        getAllPriceModels() {
            return this.priceModelResource.query();
        }

        update(id: number) {
            id = this.priceModelId;
            this.priceModelResource.update({ id: id }, this.newSinglePriceModel).$promise
                .then((data) => {
                    this.hasBeenEdited = true;
                    this.closeModal();
                })
                .catch((response: any) => {
                    for (let prop in response.data) {
                        this.validationErrors.push(`${prop} - ${response.data[prop]}`);
                    }
                })
        }

        closeModal() {
            this.$uibModalInstance.close({ hasBeenEdited: this.hasBeenEdited });
        }
    }
}