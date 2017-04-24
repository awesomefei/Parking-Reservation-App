using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ParkingLotWeb.Data.Migrations
{
    public partial class AddParkingLot : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ParkingSpace",
                table: "ParkingSpace");

            migrationBuilder.CreateTable(
                name: "ParkingLot",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    mapURL = table.Column<string>(nullable: true),
                    spotCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParkingLot", x => x.Id);
                });

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ParkingSpace",
                table: "ParkingSpace");

            migrationBuilder.DropTable(
                name: "ParkingLot");

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
        }
    }
}
