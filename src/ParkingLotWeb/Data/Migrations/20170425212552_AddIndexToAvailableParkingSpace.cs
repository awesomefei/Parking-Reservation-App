using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ParkingLotWeb.Data.Migrations
{
    public partial class AddIndexToAvailableParkingSpace : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_AvaliableParkingSpace_OneHourTime_ParkingSpaceId",
                table: "AvaliableParkingSpace",
                columns: new[] { "OneHourTime", "ParkingSpaceId" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_AvaliableParkingSpace_OneHourTime_ParkingSpaceId",
                table: "AvaliableParkingSpace");
        }
    }
}
