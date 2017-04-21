using Microsoft.EntityFrameworkCore;
using ParkingLotWeb.Data;
using ParkingLotWeb.Models;
using ParkingLotWeb.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParkingLotWeb.Services
{
    public class ParkingSpaceService : IDisposable
    {
        private IGerneralRepositpry repo;
        private ApplicationDbContext db;

        public ParkingSpaceService (ApplicationDbContext db, IGerneralRepositpry repo)
        {
            this.db = db;
            this.repo = repo;
        }
       
        public IEnumerable<ParkingSpace> GetAllPrice()
        {
            return repo.List<ParkingSpace>()
                .Select(x => new ParkingSpace()
                {
                    Id = x.Id,
                    SpaceNum = x.SpaceNum,
                    Zoon = x.Zoon,
                    VehicleType=x.VehicleType
                });
        }

        public ParkingSpace GetlParkingSpaceById(int id)
        {
            ParkingSpace singleParkingSpace = GetAllPrice()
                .FirstOrDefault(x => x.Id==id);
            return singleParkingSpace;
        }

        public ParkingSpace SaveOneParkingSpace(ParkingSpace parkingSpace)
        {
            return repo.Save<ParkingSpace>(parkingSpace);
        }

        public bool UpdateParkingSpace(int id, ParkingSpace parkingSpace)
        {
            var record = GetlParkingSpaceById(id);
            if (record == null)
            {
                return false;
            }
            record.SpaceNum = parkingSpace.SpaceNum;
            record.VehicleType = parkingSpace.VehicleType;
            record.Zoon = parkingSpace.Zoon;
            repo.Update<ParkingSpace>(record);
            return true;
        }

        public bool DeleteParkingSpaceById(int id)
        {
            var record = GetlParkingSpaceById(id);
            if(record == null)
            {
                return false;
            }
            repo.Delete(record);
            return true;
        }

         public void Dispose()
        {
            repo.Dispose();
        }
    }
}
