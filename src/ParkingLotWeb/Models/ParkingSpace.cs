using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParkingLotWeb.Models
{
    public class ParkingSpace
    {
        public int Id { get; set; }
        public string Zoon { get; set; }
        public int SpaceNum { get; set; }
        public string Vehicletype { get; set; }
    }
}
