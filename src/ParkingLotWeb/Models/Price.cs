using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParkingLotWeb.Models
{
    public class PriceModel
    {
        public int Id { get; set; }
        public int Price { get; set; }
        public string VehicleType { get; set; }
    }
}
