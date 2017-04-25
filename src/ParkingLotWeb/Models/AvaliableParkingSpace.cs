using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParkingLotWeb.Models
{
    public class AvaliableParkingSpace
    {
        public int Id { get; set; }
        public int ParkingSpaceId { get; set; }
        public DateTime Date { get; set; }
        public int OneHourTime { get; set; }
        public Boolean Active { get; set; }
        public DateTime LastUpdateTime { get; set; }
    }
}
