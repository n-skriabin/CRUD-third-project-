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

        public BooksService(string connectionString)
        {
            _bookRepository = new BookRepository(connectionString);
            _authorRepository = new AuthorRepository(connectionString);
        }

        public List<BookViewModel> GetAll()
        {
            var books = _bookRepository.GetAll();
            return books;
        }

        public BookViewModel Create(PostBookViewModel postBookViewModel)
        {
            var book = ViewModelToDomain(postBookViewModel);

            _bookRepository.Create(book, postBookViewModel.AuthorIds);

            return null;
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
            var id = Guid.Parse(bookViewModel.Id);
            _bookRepository.Delete(id);
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

        private BookViewModel DomainToViewModel(PostBookViewModel postBookViewModel)
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
    }
}