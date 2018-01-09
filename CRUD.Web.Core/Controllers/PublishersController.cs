using Microsoft.AspNetCore.Mvc;
using CRUD.Services;
using CRUD.Views;
using Microsoft.Extensions.Configuration;
using CRUD.Views.ResponseModels;
using CRUD.Web.Core.Controllers;
using System;

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
        public IActionResult GetAll()
        {
            try
            {
                var publishers = _publishersService.GetAll();
                if (publishers == null)
                {
                    return null;
                }
                return Ok(publishers);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody]PostPublisherViewModel postPublisherViewModel)
        {
            try
            {
                _publishersService.Create(postPublisherViewModel);
                return Ok(postPublisherViewModel);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Update([FromBody]PostPublisherViewModel postPublisherViewModel)
        {
            try
            {
                _publishersService.Update(postPublisherViewModel);
                return Ok(postPublisherViewModel);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Delete([FromBody]PublisherViewModel publisherViewModel)
        {
            try
            {
                _publishersService.Delete(publisherViewModel);
                return Ok(publisherViewModel);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}
