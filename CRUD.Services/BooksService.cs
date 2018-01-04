using CRUD.DataAccess;
using CRUD.DataAccess.Repositories;
using CRUD.Domain;
using CRUD.Views;
using CRUD.Views.ResponseModels;
using System;
using System.Collections.Generic;

namespace CRUD.Services
{
    public class BooksService
    {
        private BookRepository _bookRepository;
        private AuthorRepository _authorRepository;

        public BooksService(string ConnectionString)
        {
            _bookRepository = new BookRepository(ConnectionString);
            _authorRepository = new AuthorRepository(ConnectionString);
        }

        public List<BookViewModel> Read()
        {
            List<BookViewModel> books = _bookRepository.Read();
            //var booksListForViewModel = new List<BookViewModel>();

            //if (books == null || books.Count == 0)
            //{
            //    return booksListForViewModel;
            //}

            //foreach (var book in books)
            //{
            //    var authors = _authorRepository.GetAuthors(book.Id);
            //    if (authors.Count == 0)
            //    {
            //        _bookRepository.Delete(book.Id);
            //        continue;
            //    }
            //    BookViewModel bookViewModel = new BookViewModel
            //    {
            //        Id = book.Id.ToString(),
            //        Name = book.Name,
            //        Year = book.Year,
            //        AuthorsList = authors,
            //    };
            //    bookViewModel.AuthorIds = GetAuthorIdsArray(bookViewModel.AuthorsList);
            //    booksListForViewModel.Add(bookViewModel);
            //}
            return books;
        }

        public BookViewModel Create(PostBookViewModel postBookViewModel)
        {
            var book = ViewModelToDomain(postBookViewModel);
            var bookViewModel = DomainToViewModel(postBookViewModel);

            _bookRepository.Create(book, postBookViewModel.AuthorIds);

            return bookViewModel;
        }

        public BookViewModel Update(PostBookViewModel postBookViewModel)
        {
            var book = ViewModelToDomain(postBookViewModel);
            var bookViewModel = DomainToViewModel(postBookViewModel);
            book.Id = Guid.Parse(postBookViewModel.Id);

            _bookRepository.Update(book, postBookViewModel.AuthorIds);

            return bookViewModel;
        }

        public void Delete(BookViewModel bookViewModel)
        {
            _bookRepository.Delete(Guid.Parse(bookViewModel.Id));
        }

        public Book ViewModelToDomain(PostBookViewModel postBookViewModel)
        {
            Book book = new Book()
            {
                Name = postBookViewModel.Name,
                Year = postBookViewModel.Year,
            };
            return book;
        }

        public BookViewModel DomainToViewModel(PostBookViewModel postBookViewModel)
        {
            BookViewModel bookViewModel = new BookViewModel
            {
                Id = postBookViewModel.Id,
                Name = postBookViewModel.Name,
                Year = postBookViewModel.Year,
                AuthorsList = _authorRepository.GetAuthors(Guid.Parse(postBookViewModel.Id)),
            };

            return bookViewModel;
        }

        public List<string> GetAuthorIdsArray(List<Author> authors)
        {    
            var authorIds = new List<string>();
            foreach (var author in authors)
            {
                authorIds.Add(author.Id.ToString());
            }
            return authorIds; 
        }
    }
}