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
       

        public IEnumerable<ParkingSpace> GetAllParkingSpace()
        {
            return repo.List<ParkingSpace>()
                .Select(x => new ParkingSpace()
                {
                    Id = x.Id,
                    SpaceNum = x.SpaceNum,
                    Vehicletype = x.Vehicletype,
                    Zoon = x.Zoon,
                    price = x.price
                });
        }

        public ParkingSpace GetlParkingSpaceById(int id)
        {
            ParkingSpace singleParkingSpace = GetAllParkingSpace().FirstOrDefault();
            return singleParkingSpace;
        }

        public ParkingSpace SaveOneParkingSpace(ParkingSpace parkingSpace)
        {
            return repo.Save<ParkingSpace>(parkingSpace);
        }

        public bool UpdateParkingSpace(int id, ParkingSpace parkingSpace)
        {
            var record = GetlParkingSpaceById(id);
            if(record == null)
            {
                return false;
            }
            record.SpaceNum = parkingSpace.SpaceNum;
            record.Vehicletype = parkingSpace.Vehicletype;
            record.Zoon = parkingSpace.Zoon;
            record.price = parkingSpace.price;
            return true;
        }

        public bool DeleteMovie(int id)
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
                    throw new NotImplementedException();
                }
    }
}
