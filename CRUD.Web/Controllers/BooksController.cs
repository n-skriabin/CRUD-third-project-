using CRUD.Services;
using CRUD.Views;
using CRUD.Views.ResponseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using System.Web.Http;

namespace CRUD.Web.Controllers
{
    public class BooksController : ApiController
    {
        BooksService booksService;

        public BooksController()
        {
            string connectionString = WebConfigurationManager.ConnectionStrings["ConnectionStringDB"].ConnectionString;
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
