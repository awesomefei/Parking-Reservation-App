using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ParkingLotWeb.Models;

namespace ParkingLotWeb.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<ParkingSpace> ParkingSpace { get; set; }
        public DbSet<UnavailableParkingSpace> UnavailableParkingSpace { get; set; }
        public DbSet<AvaliableParkingSpace> AvaliableParkingSpace { get; set; }
        public DbSet<UserViewModel> UserViewModel { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<UnavailableParkingSpace>().HasKey(x => new { x.Id });
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
    }
}
