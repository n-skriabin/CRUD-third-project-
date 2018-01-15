using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CRUD.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    public class BaseController : Controller
    {
        public string ConnectionString { get; set; }

        public BaseController(IConfiguration configuration)
        {
            ConnectionString = configuration.GetConnectionString("DefaultConnection");
        }
    }
}