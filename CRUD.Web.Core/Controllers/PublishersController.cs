using Microsoft.AspNetCore.Mvc;
using CRUD.Services;
using CRUD.Views;
using Microsoft.Extensions.Configuration;
using CRUD.Views.ResponseModels;
using CRUD.Web.Core.Controllers;

namespace CRUD.Web.Controllers
{
    public class PublishersController : BaseController
    {
        private PublishersService _publishersService;

        public PublishersController(IConfiguration configuration) : base(configuration)
        {
            _publishersService = new PublishersService(ConnectionString);
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
