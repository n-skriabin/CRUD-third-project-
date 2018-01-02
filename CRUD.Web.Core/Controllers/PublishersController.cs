using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CRUD.Services;
using CRUD.DataAccess;
using CRUD.Views;
using Microsoft.Extensions.Configuration;
using CRUD.Views.ResponseModels;

namespace CRUD.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    public class PublishersController : Controller
    {
        PublishersService publishersService;
        private readonly IConfiguration _configuration;

        public PublishersController(IConfiguration configuration)
        {
            _configuration = configuration;
            string connectionString = _configuration.GetConnectionString("DefaultConnection");
            publishersService = new PublishersService(connectionString);
        }

        [HttpGet]
        public List<PublisherViewModel> Read()
        {
            var publishers = publishersService.Read();
            if (publishers == null)
            {
                return null;
            }
            return publishers;
        }

        [HttpPost]
        public void Create(PostPublisherViewModel postPublisherViewModel)
        {
            publishersService.Create(postPublisherViewModel);
        }

        [HttpPost]
        public void Update(PostPublisherViewModel postPublisherViewModel)
        {
            publishersService.Update(postPublisherViewModel);
        }

        [HttpPost]
        public void Delete(PublisherViewModel publisherViewModel)
        {
            publishersService.Delete(publisherViewModel);
        }
    }
}
