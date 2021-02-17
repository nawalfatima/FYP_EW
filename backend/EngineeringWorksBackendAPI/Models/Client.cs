using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EngineeringWorks.Models
{
    public class Client
    {
        [Key]
        public int Id { get; set; }

        [Column (TypeName = "nvarchar(100)")]
        public string Username { get; set; }

        [Column(TypeName = "nvarchar(100)")]

        public string Name { get; set; }

        [Column(TypeName = "nvarchar(100)")]

        public string Email { get; set; }

        [Column(TypeName = "nvarchar(16)")]

        public string Password { get; set; }

        [Column(TypeName = "nvarchar(13)")]

        public string Cnic { get; set; }

        [Column(TypeName = "nvarchar(12)")]

        public string Mobile { get; set; }

        [Column(TypeName = "nvarchar(100)")]

        public string Address { get; set; }
    }
}
