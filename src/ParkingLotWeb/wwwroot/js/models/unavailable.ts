namespace PrkingLotWeb.Model {
    export class UnavailableParkingSpot {
        public id: number;
        public active: boolean;
        public date: Date;
        public lastUpdateTime: Date;
        public oneHourTime: number;
        public parkingSpaceId: number;
        public userId: number;
    }
}