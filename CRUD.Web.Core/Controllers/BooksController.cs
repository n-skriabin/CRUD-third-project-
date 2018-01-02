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
    public class BooksController : Controller
    {
        BooksService booksService;
        private readonly IConfiguration _configuration;

        public BooksController(IConfiguration configuration)
        {
            _configuration = configuration;
            string connectionString = _configuration.GetConnectionString("DefaultConnection");
            booksService = new BooksService(connectionString);
        }

        [HttpGet]
        public List<BookViewModel> Read()
        {
            var books = booksService.Read();
            if (books == null)
            {
                return null;
            }
            return books;
        }

        [HttpPost]
        public BookViewModel Create(PostBookViewModel postBookViewModel)
        {
            var bookViewModel = booksService.Create(postBookViewModel);
            return bookViewModel;
        }

        [HttpPost]
        public BookViewModel Update(PostBookViewModel postBookViewModel)
        {
            var bookViewModel = booksService.Update(postBookViewModel);
            return bookViewModel;
        }

        [HttpPost]
        public void Delete(BookViewModel bookViewModel)
        {
            booksService.Delete(bookViewModel);
        }

        [HttpPost]
        public List<BookViewModel> ReadBooksForMultiselect(BookViewModel bookViewModel)
        {
            return booksService.Read();
        }
    }
}
