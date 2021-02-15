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
    public class ClientController : ControllerBase
    {
        [HttpGet("Client/Authenticate")]
        public IActionResult Authenticate(string username, string password)
        {
            Database.Connect();
            DataTable dataTable = Database.GetDataTable("SELECT * FROM Client WHERE username = '" + username + "' AND password = '" + password + "';");
            Database.Disconnect();

            var clientList = MapTableToClient(dataTable);
            return Ok(clientList);
        }

        [HttpGet("Client/Get")]
        public IActionResult Get()
        {
            Database.Connect();
            DataTable dataTable = Database.GetDataTable("SELECT * FROM Client");
            Database.Disconnect();

            var clientList = MapTableToClient(dataTable);
            return Ok(clientList);
        }

        [HttpGet("Client/Add")]
        public IActionResult Add(string username, string name, string email, string password, string cnic, string mobile, string address)
        {
            string insertQuery = @"INSERT INTO Client VALUES ('" + username + "','" + name + "','" + email + "','" + password + "','" + cnic + "','" + mobile + "','" + address + "')";

            Database.Connect();
            int count = Database.ExecuteNonQuery(insertQuery);
            DataTable dataTable = Database.GetDataTable("SELECT * FROM Client WHERE username = '" + username + "';");
            Database.Disconnect();

            var clientList = MapTableToClient(dataTable);
            return Ok(clientList);
        }

        private IList<Client> MapTableToClient(DataTable dataTable)
        {
            return (from row in dataTable.AsEnumerable()
                    select new Client()
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
