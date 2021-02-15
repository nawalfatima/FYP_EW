using EngineeringWorksAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace EngineeringWorksAPI.Controllers
{
    [ApiController]
    public class AdminController : ControllerBase
    {
        [HttpGet("Admin/Authenticate")]
        public IActionResult Authenticate(string username, string password)
        {
            Database.Connect();
            DataTable dataTable = Database.GetDataTable("SELECT * FROM Admin WHERE username = '" + username + "' AND password = '" + password + "';");
            Database.Disconnect();

            var adminList = MapTableToAdmin(dataTable);
            return Ok(adminList);
        }

        [HttpGet("Admin/Get")]
        public IActionResult Get()
        {
            Database.Connect();
            DataTable dataTable = Database.GetDataTable("SELECT * FROM Admin");
            Database.Disconnect();

            var adminList = MapTableToAdmin(dataTable);
            return Ok(adminList);
        }

        [HttpGet("Admin/Add")]
        public IActionResult Add(string id, string username, string name, string email, string password, string cnic, string mobile, string address)
        {
            string insertQuery = @"INSERT INTO Admin VALUES ('" + username +"','" + name +"','" + email +"','" + password + "','" + cnic + "','" + mobile + "','" + address + "')";

            Database.Connect();
            int count = Database.ExecuteNonQuery(insertQuery);
            DataTable dataTable = Database.GetDataTable("SELECT * FROM Admin WHERE username = '" + username + "';");
            Database.Disconnect();

            var adminList = MapTableToAdmin(dataTable);
            return Ok(adminList);
        }

        private IList<Admin> MapTableToAdmin(DataTable dataTable)
        {
            return (from row in dataTable.AsEnumerable()
                    select new Admin()
                    {
                        Id = Convert.ToInt32(row["ID"]),
                        Username = Convert.ToString(row["UserName"]),
                        Name = Convert.ToString(row["Name"]),
                        Email = Convert.ToString(row["Email"]),
                        Password = Convert.ToString(row["Password"]),
                        Cnic = Convert.ToString(row["Cnic"]),
                        Mobile = Convert.ToString(row["Mobile"]),
                        Address = Convert.ToString(row["Address"])
                    }).ToList();
        }
    }
}
