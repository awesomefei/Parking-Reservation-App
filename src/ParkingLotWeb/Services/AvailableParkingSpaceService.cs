using ParkingLotWeb.Data;
using ParkingLotWeb.Models;
using ParkingLotWeb.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParkingLotWeb.Services
{
    public class AvailableParkingSpaceService
    {
        private IGerneralRepositpry repo;
        private ApplicationDbContext db;

        public AvailableParkingSpaceService(ApplicationDbContext db, IGerneralRepositpry repo)
        {
            this.db = db;
            this.repo = repo;
        }

        public IEnumerable<AvaliableParkingSpace> GetAllAvailableParkingSpace()
        {
            return repo.List<AvaliableParkingSpace>()
                .Select(x => new AvaliableParkingSpace()
                {
                    Active = x.Active,
                    Date = x.Date,
                    LastUpdateTime = x.LastUpdateTime,
                    OneHourTime = x.OneHourTime,
                    ParkingSpaceId = x.ParkingSpaceId
                });
        }

        public AvaliableParkingSpace GetAvailableParkingSpaceById(int id)
        {
            AvaliableParkingSpace singleAvailableParkingSpace = GetAllAvailableParkingSpace().FirstOrDefault();
            return singleAvailableParkingSpace;
        }

        public AvaliableParkingSpace SaveAvailableParkingSpace(AvaliableParkingSpace avaliableParkingSpace)
        {
            return repo.Save<AvaliableParkingSpace>(avaliableParkingSpace);
        }

        
    }
}
