using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD.Web.Core
{
    public static class ConnectionString
    {
        private static IConfiguration _configuration;

        public static string GetConnectionString(IConfiguration configuration)
        {
            _configuration = configuration;
            string connectionString = _configuration.GetConnectionString("DefaultConnection");
            return connectionString;
        }
    }
}
