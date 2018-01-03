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
using CRUD.Web.Core;

namespace CRUD.Web.Controllers
{
    public class PublishersController : Controller
    {
        private PublishersService _publishersService;

        public PublishersController(IConfiguration configuration)
        {
            _publishersService = new PublishersService(ConnectionString.GetConnectionString(configuration));
        }

        [HttpGet]
        public IActionResult Read()
        {
            var publishers = _publishersService.Read();
            if (publishers == null)
            {
                return null;
            }
            return Ok(publishers);
        }

        [HttpPost]
        public IActionResult Create([FromBody]PostPublisherViewModel postPublisherViewModel)
        {
            _publishersService.Create(postPublisherViewModel);
            return Ok(postPublisherViewModel);
        }

        [HttpPost]
        public IActionResult Update([FromBody]PostPublisherViewModel postPublisherViewModel)
        {
            _publishersService.Update(postPublisherViewModel);
            return Ok(postPublisherViewModel);
        }

        [HttpPost]
        public IActionResult Delete([FromBody]PublisherViewModel publisherViewModel)
        {
            _publishersService.Delete(publisherViewModel);
            return Ok(publisherViewModel);
        }
    }
}
