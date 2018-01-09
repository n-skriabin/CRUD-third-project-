using Microsoft.AspNetCore.Mvc;
using CRUD.Services;
using CRUD.Views;
using Microsoft.Extensions.Configuration;
using CRUD.Views.ResponseModels;
using CRUD.Web.Core.Controllers;
using System;

namespace CRUD.Web.Controllers
{
    public class BooksController : BaseController
    {
        private BooksService _booksService;

        public BooksController(IConfiguration configuration) : base(configuration)
        {
            _booksService = new BooksService(ConnectionString);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var books = _booksService.GetAll();
                if (books == null)
                {
                    return null;
                }
                return Ok(books);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody]PostBookViewModel postBookViewModel)
        {
            try
            {
                var bookViewModel = _booksService.Create(postBookViewModel);
                return Ok(bookViewModel);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Update([FromBody]PostBookViewModel postBookViewModel)
        {
            try
            {
                var bookViewModel = _booksService.Update(postBookViewModel);
                return Ok(bookViewModel);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Delete([FromBody]BookViewModel bookViewModel)
        {
            try
            {
                _booksService.Delete(bookViewModel);
                return Ok();
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult GetBooksForMultiselect([FromBody]BookViewModel bookViewModel)
        {
            try
            {
                return Ok(_booksService.GetAll());
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}
