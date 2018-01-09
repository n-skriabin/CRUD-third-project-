using System;
using Microsoft.AspNetCore.Mvc;
using CRUD.Services;
using CRUD.Views;
using Microsoft.Extensions.Configuration;

namespace CRUD.Web.Core.Controllers
{
    public class AuthorsController : BaseController
    {
        private AuthorsService _authorsService;

        public AuthorsController(IConfiguration configuration) : base(configuration)
        {
            _authorsService = new AuthorsService(ConnectionString);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var authorViewModel = _authorsService.GetAll();
                return Ok(authorViewModel);
            }
            catch(Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody]AuthorViewModel authorViewModel)
        {
            //try
            //{
                _authorsService.Create(authorViewModel);
                return Ok(authorViewModel);
            //}
            //catch(Exception exception)
            //{
            //    return BadRequest(exception);
            //}
        }

        [HttpPost]
        public IActionResult Update([FromBody]AuthorViewModel authorViewModel)
        {
            try
            {
                _authorsService.Update(authorViewModel);
                return Ok(authorViewModel);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Delete([FromBody]AuthorViewModel authorViewModel)
        {
            try
            {
                var Id = Guid.Parse(authorViewModel.Id);
                _authorsService.Delete(Id);
                return Ok();
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}
