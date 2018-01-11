using CRUD.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using Dapper.Contrib.Extensions;
using CRUD.DataAccess.ReponseModels;

namespace CRUD.DataAccess.Repositories
{
    public class BookRepository
    {
        private IDbConnection _db;

        public BookRepository(string connectionString)
        {
            Context context = new Context(connectionString);
            _db = new SqlConnection(connectionString);
        }

        public List<Book> GetAll()
        {
            string query = @"SELECT Authors.*, Books.*
                             FROM Authors 
                             INNER JOIN BooksAuthors on BooksAuthors.AuthorId = Authors.Id
                             INNER JOIN Books on BooksAuthors.BookId = Books.Id";
            var booksDictionary = new Dictionary<string, Book>();

            _db.Query<Author, BookResponseModel, Book>(query, (author, bookResponseModel) =>
            {
                Book book = new Book();
                if (!booksDictionary.TryGetValue(bookResponseModel.Id.ToString(), out book))
                {
                    book = new Book
                    {
                        Id = bookResponseModel.Id,
                        Name = bookResponseModel.Name,
                        Year = bookResponseModel.Year
                    };
                    booksDictionary.Add(bookResponseModel.Id.ToString(), book);
                }

                if (book.Authors == null)
                    book.Authors = new List<Author>();

                book.Authors.Add(author);

                return book;
            }).AsQueryable();

            var bookList = booksDictionary.Values.ToList();
            return bookList;
        }

        public void Create(Book book, List<string> authorsListIds)
        {
            AddBookInBooksAuthors(book, authorsListIds);

            string query = "INSERT INTO Books (Id, Name, Year, LastUpdateDate) VALUES (@Id, @Name, @Year, @LastUpdateDate)";
            _db.Query(query, book);
        }

        public void Update(Book newRecord, List<string> authorsListIds)
        {
            DeleteRelationships(newRecord.Id);

            AddBookInBooksAuthors(newRecord, authorsListIds);

            newRecord.LastUpdateDate = DateTime.UtcNow;
            _db.Update(newRecord);
        }

        public void Delete(Guid bookId)
        {
            DeleteRelationships(bookId);

            Book book = new Book
            {
                Id = bookId
            };
            _db.Delete(book);
        }

        public void DeleteRelationships(Guid bookId)
        {
            var stringBookId = bookId.ToString();

            string query = "DELETE FROM BooksAuthors WHERE BookId = @stringBookId";
            _db.Query(query, new { stringBookId });
        }

        public List<Book> GetBooks(Guid publisherId)
        {
            string query = "SELECT * FROM Books WHERE PublisherId = @publisherId";
            var booksList = _db.Query<Book>(query, new { publisherId }).ToList();
            return booksList;
        }

        public void AddBookInBooksAuthors(Book book, List<string> authorsListId)
        {
            foreach (var authorID in authorsListId)
            {
                var bookAuthor = new BooksAuthors
                {
                    Id = Guid.NewGuid(),
                    BookId = book.Id,
                    AuthorId = Guid.Parse(authorID),
                };

                string query = "INSERT INTO BooksAuthors (Id, BookId, AuthorId) VALUES (@Id, @BookId, @AuthorId)";
                _db.Query(query, new { Id = bookAuthor.Id, BookId = bookAuthor.BookId, AuthorId = bookAuthor.AuthorId });
            }
        }
    }
}
