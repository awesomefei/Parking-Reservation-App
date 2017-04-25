using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ParkingLotWeb.Data.Migrations
{
    public partial class UpdateAvaliableAndUnavailableParkingSpace : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "OneHourTime",
                table: "UnavailableParkingSpace",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "LastUpdateTime",
                table: "UnavailableParkingSpace",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "UnavailableParkingSpace",
                nullable: false);

            migrationBuilder.AlterColumn<int>(
                name: "OneHourTime",
                table: "AvaliableParkingSpace",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "LastUpdateTime",
                table: "AvaliableParkingSpace",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "AvaliableParkingSpace",
                nullable: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "OneHourTime",
                table: "UnavailableParkingSpace",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "LastUpdateTime",
                table: "UnavailableParkingSpace",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Date",
                table: "UnavailableParkingSpace",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "OneHourTime",
                table: "AvaliableParkingSpace",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "LastUpdateTime",
                table: "AvaliableParkingSpace",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Date",
                table: "AvaliableParkingSpace",
                nullable: true);
        }
    }
}
