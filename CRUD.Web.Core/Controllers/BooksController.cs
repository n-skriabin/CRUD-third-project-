using Microsoft.AspNetCore.Mvc;
using CRUD.Services;
using CRUD.Views;
using Microsoft.Extensions.Configuration;
using CRUD.Views.ResponseModels;
using CRUD.Web.Core.Controllers;

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
        public IActionResult Read()
        {
            var books = _booksService.Read();
            if (books == null)
            {
                return null;
            }
            return Ok(books);
        }

        [HttpPost]
        public IActionResult Create([FromBody]PostBookViewModel postBookViewModel)
        {
            var bookViewModel = _booksService.Create(postBookViewModel);
            return Ok(bookViewModel);
        }

        [HttpPost]
        public IActionResult Update([FromBody]PostBookViewModel postBookViewModel)
        {
            var bookViewModel = _booksService.Update(postBookViewModel);
            return Ok(bookViewModel);
        }

        [HttpPost]
        public IActionResult Delete([FromBody]BookViewModel bookViewModel)
        {
            _booksService.Delete(bookViewModel);
            return Ok();
        }

        [HttpPost]
        public IActionResult ReadBooksForMultiselect([FromBody]BookViewModel bookViewModel)
        {
            return Ok(_booksService.Read());
        }
    }
}
