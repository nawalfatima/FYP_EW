using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EngineeringWorks.Models
{
    public class UserContext: DbContext
    {
        public UserContext(DbContextOptions<UserContext>options): base(options)
        {

        }
        public DbSet<Admin> Admin { get; set; }

        public DbSet<Client> Client { get; set; }
    }
}
