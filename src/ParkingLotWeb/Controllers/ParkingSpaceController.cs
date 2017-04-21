using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ParkingLotWeb.Services;
using ParkingLotWeb.Models;
using ParkingLotWeb.Data;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ParkingLotWeb.Controllers
{
    [Route("api/[controller]")]
    public class ParkingSpaceController : Controller
    {
        private ParkingSpaceService service;
        private ApplicationDbContext db;

        public ParkingSpaceController(ParkingSpaceService service, ApplicationDbContext db)
        {
            this.service = service;
            this.db = db;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<ParkingSpace> Get()
        {
            return service.GetAllParkingSpace();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ParkingSpace Get(int id)
        {
            return service.GetlParkingSpaceById(id);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]ParkingSpace parkingSpace)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var record = service.SaveOneParkingSpace(parkingSpace);
            return Created("api/parkingSpace/:id" + parkingSpace.Id, parkingSpace);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]ParkingSpace parkingSpace)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (!service.UpdateParkingSpace(id, parkingSpace))
            {
                return NotFound();
            }
            return NoContent();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {

            if (!service.DeleteParkingSpaceById(id))
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
