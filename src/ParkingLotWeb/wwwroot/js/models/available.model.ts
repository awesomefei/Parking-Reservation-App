namespace PrkingLotWeb.Model {
    export class AvailableParkingSpot {
        public id: number;
        public active: boolean;
        public date: Date;
        public lastUpdateTime: Date;
        public oneHourTime: number;
        public parkingSpaceId: number;
    }
}