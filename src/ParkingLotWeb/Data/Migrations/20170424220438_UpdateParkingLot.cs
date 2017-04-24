using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ParkingLotWeb.Data.Migrations
{
    public partial class UpdateParkingLot : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "ParkingLot",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "ParkingLot",
                nullable: true);

            migrationBuilder.RenameColumn(
                name: "spotCount",
                table: "ParkingLot",
                newName: "SpotCount");

            migrationBuilder.RenameColumn(
                name: "mapURL",
                table: "ParkingLot",
                newName: "MapURL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "ParkingLot");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "ParkingLot");

            migrationBuilder.RenameColumn(
                name: "SpotCount",
                table: "ParkingLot",
                newName: "spotCount");

            migrationBuilder.RenameColumn(
                name: "MapURL",
                table: "ParkingLot",
                newName: "mapURL");
        }
    }
}
