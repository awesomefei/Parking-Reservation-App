using ParkingLotWeb.Data;
using ParkingLotWeb.Models;
using ParkingLotWeb.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParkingLotWeb.Services
{
    public class PriceService : IDisposable
    {
        private IGerneralRepositpry repo;
        private ApplicationDbContext db;

        public PriceService(ApplicationDbContext db, IGerneralRepositpry repo)
        {
            this.db = db;
            this.repo = repo;
        }

        public IEnumerable<PriceModel> GetAllPrice()
        {
            return repo.List<PriceModel>()
                .Select(x => new PriceModel()
                {
                    Id = x.Id,
                    Price = x.Price,
                    VehicleType = x.VehicleType
                });
        }

        public PriceModel GetlPriceById(int id)
        {
            PriceModel singlePriceForEachVehcle = GetAllPrice()
                .FirstOrDefault(x => x.Id == id);
            return singlePriceForEachVehcle;
        }

        public PriceModel SaveOnePriceModel(PriceModel priceModel)
        {
            return repo.Save<PriceModel>(priceModel);
        }

        public bool UpdatePriceModel(int id, PriceModel priceModel)
        {
            var record = GetlPriceById(id);
            if (record == null)
            {
                return false;
            }
            record.Price = priceModel.Price;
            record.VehicleType = priceModel.VehicleType;
            repo.Update<PriceModel>(record);
            return true;
        }

        public bool DeletePriceModelById(int id)
        {
            var record = GetlPriceById(id);
            if (record == null)
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
