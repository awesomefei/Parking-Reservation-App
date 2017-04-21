using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ParkingLotWeb.Data.Migrations
{
    public partial class Updated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ParkingSpace",
                table: "ParkingSpace");

            migrationBuilder.DropColumn(
                name: "Vehicletype",
                table: "ParkingSpace");

            migrationBuilder.DropColumn(
                name: "price",
                table: "ParkingSpace");

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

            migrationBuilder.AlterColumn<string>(
                name: "Zoon",
                table: "ParkingSpace",
                nullable: false);

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "ParkingSpace",
                nullable: false);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ParkingSpace",
                table: "ParkingSpace",
                columns: new[] { "SpaceNum", "Zoon" });

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ParkingSpace_Vehicle_VehicleTypeId",
                table: "ParkingSpace");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ParkingSpace",
                table: "ParkingSpace");

            migrationBuilder.DropIndex(
                name: "IX_ParkingSpace_VehicleTypeId",
                table: "ParkingSpace");

            migrationBuilder.DropColumn(
                name: "VehicleTypeId",
                table: "ParkingSpace");

            migrationBuilder.DropTable(
                name: "Vehicle");

            migrationBuilder.AddColumn<string>(
                name: "Vehicletype",
                table: "ParkingSpace",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "price",
                table: "ParkingSpace",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "ParkingSpace",
                nullable: false)
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AlterColumn<string>(
                name: "Zoon",
                table: "ParkingSpace",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ParkingSpace",
                table: "ParkingSpace",
                column: "Id");
        }
    }
}
