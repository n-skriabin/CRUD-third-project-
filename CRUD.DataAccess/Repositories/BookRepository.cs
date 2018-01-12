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
            var context = new Context(connectionString);
            _db = new SqlConnection(connectionString);
        }

        public List<BookResponseModel> GetAll()
        {
            string query = @"SELECT Authors.*, Books.*
                             FROM Authors 
                             INNER JOIN BooksAuthors on BooksAuthors.AuthorId = Authors.Id
                             INNER JOIN Books on BooksAuthors.BookId = Books.Id";
            var booksDictionary = new Dictionary<string, BookResponseModel>();

            _db.Query<Author, Book, BookResponseModel>(query, (author, book) =>
            {
                var bookResponseModel = new BookResponseModel();
                if (!booksDictionary.TryGetValue(book.Id.ToString(), out bookResponseModel))
                {
                    bookResponseModel = new BookResponseModel
                    {
                        Id = book.Id,
                        Name = book.Name,
                        Year = book.Year
                    };
                    booksDictionary.Add(bookResponseModel.Id.ToString(), bookResponseModel);
                }

                if (bookResponseModel.Authors == null)
                    bookResponseModel.Authors = new List<Author>();

                bookResponseModel.Authors.Add(author);

                return bookResponseModel;
            }).AsQueryable();

            List<BookResponseModel> bookList = booksDictionary.Values.ToList();
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

            string query = "UPDATE Books SET Name = @Name, Year = @Year, LastUpdateDate = @LastUpdateDate WHERE Id = @Id";
            _db.Query(query, newRecord);
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
