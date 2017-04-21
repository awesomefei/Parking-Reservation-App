using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ParkingLotWeb.Data.Migrations
{
    public partial class UpdatedParkingSpaceAndPriceTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ParkingSpace_Vehicle_VehicleTypeId",
                table: "ParkingSpace");

            migrationBuilder.DropIndex(
                name: "IX_ParkingSpace_VehicleTypeId",
                table: "ParkingSpace");

            migrationBuilder.DropColumn(
                name: "VehicleTypeId",
                table: "ParkingSpace");

            migrationBuilder.DropTable(
                name: "Vehicle");

            migrationBuilder.CreateTable(
                name: "Price",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Price = table.Column<int>(nullable: false),
                    VehicleType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Price", x => x.Id);
                });

            migrationBuilder.AddColumn<string>(
                name: "VehicleType",
                table: "ParkingSpace",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "VehicleType",
                table: "ParkingSpace");

            migrationBuilder.DropTable(
                name: "Price");

            migrationBuilder.CreateTable(
                name: "Vehicle",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Price = table.Column<int>(nullable: false),
                    VehicleType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicle", x => x.Id);
                });

            migrationBuilder.AddColumn<int>(
                name: "VehicleTypeId",
                table: "ParkingSpace",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ParkingSpace_VehicleTypeId",
                table: "ParkingSpace",
                column: "VehicleTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_ParkingSpace_Vehicle_VehicleTypeId",
                table: "ParkingSpace",
                column: "VehicleTypeId",
                principalTable: "Vehicle",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
