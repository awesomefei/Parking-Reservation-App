using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ParkingLotWeb.Services;
using ParkingLotWeb.Models;
using Microsoft.AspNetCore.Identity;
using ParkingLotWeb.Data;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ParkingLotWeb.Controllers
{
    [Route("api/[controller]")]
    public class AvailableParkingSpaceController : Controller
    {
        private AvailableParkingSpaceService service;
        private ApplicationDbContext db;


        public AvailableParkingSpaceController(AvailableParkingSpaceService service, ApplicationDbContext db)
        {
            this.service = service;
            this.db = db;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<AvaliableParkingSpace> Get()
        {
            return service.GetAllAvailableParkingSpace();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            AvaliableParkingSpace avaliableParkingSpace = service.GetAvailableParkingSpaceById(id);
            if(avaliableParkingSpace == null)
            {
                return NotFound();
            }
            return Ok(avaliableParkingSpace);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]AvaliableParkingSpace avaliableParkingSpace)

        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            DateTime localDate = DateTime.Now;

            avaliableParkingSpace.Active = true;
            avaliableParkingSpace.LastUpdateTime = localDate;

            var record = service.SaveAvailableParkingSpace(avaliableParkingSpace);
            return Created("api/parkingSpace/:id" + avaliableParkingSpace.Id, avaliableParkingSpace);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
