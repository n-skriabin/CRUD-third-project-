using CRUD.DataAccess;
using CRUD.DataAccess.Repositories;
using CRUD.Domain;
using CRUD.Views;
using CRUD.Views.ResponseModels;
using System;
using System.Collections.Generic;
using System.Linq;

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
            var books = _bookRepository.Read();
            var booksListForViewModel = new List<BookViewModel>();

            if (books == null || books.Count == 0)
            {
                return booksListForViewModel;
            }

            foreach (var book in books)
            {
                var authors = _authorRepository.GetAuthors(book.Id);
                if (authors.Count == 0)
                {
                    _bookRepository.Delete(book.Id);
                    continue;
                }
                BookViewModel bookViewModel = new BookViewModel
                {
                    Id = book.Id,
                    Name = book.Name,
                    Year = book.Year,
                    AuthorsList = authors,
                };
                bookViewModel.AuthorIds = GetAuthorIdsArray(bookViewModel.AuthorsList);
                booksListForViewModel.Add(bookViewModel);
            }
            return booksListForViewModel;
        }

        public BookViewModel Create(PostBookViewModel postBookViewModel)
        {
            postBookViewModel.Id = Guid.NewGuid();

            var book = ViewModelToDomain(postBookViewModel);
            var bookViewModel = DomainToViewModel(postBookViewModel);

            _bookRepository.Create(book, postBookViewModel.AuthorIds);

            return bookViewModel;
        }

        public BookViewModel Update(PostBookViewModel postBookViewModel)
        {
            var book = ViewModelToDomain(postBookViewModel);
            var bookViewModel = DomainToViewModel(postBookViewModel);

            _bookRepository.Update(book, postBookViewModel.AuthorIds);

            return bookViewModel;
        }

        public void Delete(BookViewModel bookViewModel)
        {
            _bookRepository.Delete(bookViewModel.Id);
        }

        public Book ViewModelToDomain(PostBookViewModel postBookViewModel)
        {
            Book book = new Book()
            {
                Id = postBookViewModel.Id,
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
                AuthorsList = _authorRepository.GetAuthors(postBookViewModel.Id),
            };

            return bookViewModel;
        }

        public List<Guid> GetAuthorIdsArray(List<Author> authors)
        {    
            var authorIds = new List<Guid>();
            foreach (var author in authors)
            {
                authorIds.Add(author.Id);
            }
            return authorIds; 
        }
    }
}