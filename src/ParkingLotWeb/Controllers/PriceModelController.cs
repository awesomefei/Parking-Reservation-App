using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ParkingLotWeb.Services;
using ParkingLotWeb.Data;
using ParkingLotWeb.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ParkingLotWeb.Controllers
{
    [Route("api/[controller]")]
    public class PriceModelController : Controller
    {
        private PriceService service;
        private ApplicationDbContext db;

        public PriceModelController(PriceService service, ApplicationDbContext db)
        {
            this.service = service;
            this.db = db;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<PriceModel> Get()
        {
            return service.GetAllPrice();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var record = service.GetlPriceById(id);
            if(record != null)
            {
                return Ok(record);
            }
            return NotFound();
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]PriceModel value)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var record = service.SaveOnePriceModel(value);
            return Created("api/parkingSpace/:id" + value.Id, value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]PriceModel value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (!service.UpdatePriceModel(id, value))
            {
                return NotFound();
            }
            return NoContent();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (!service.DeletePriceModelById(id))
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
