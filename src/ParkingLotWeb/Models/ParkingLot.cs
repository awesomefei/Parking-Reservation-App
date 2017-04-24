using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParkingLotWeb.Models
{
    public class ParkingLot
    {
        public int Id { set; get; }
        public string MapURL { get; set;}
        public string Phone { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public int SpotCount { get; set; }
    }
}
