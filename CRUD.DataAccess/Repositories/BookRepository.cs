using CRUD.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Data;
using System.Data.SqlClient;
using Dapper;

namespace CRUD.DataAccess.Repositories
{
    public class BookRepository
    {
        private IDbConnection _db;

        public BookRepository(string connectionString)
        {
            _db = new SqlConnection(connectionString);
        }

        public List<Book> Read()
        {
            string query = "SELECT * FROM Books";
            var books = _db.Query<Book>(query).ToList();
            return books;
        }

        public void Create(Book book, List<string> authorsListIds)
        {
            AddBookInBooksAuthors(book, authorsListIds);

            string query = "INSERT INTO Books (Id, Name, Year) VALUES (@Id, @Name, @Year)";
            _db.Query(query, new { Id = book.Id, Name = book.Name, Year = book.Year });
        }

        public void Update(Book newRecord, List<string> authorsListIds)
        {
            DeleteBook(newRecord.Id);

            AddBookInBooksAuthors(newRecord, authorsListIds);

            string query = "UPDATE Books SET Name = @Name, Year = @Year WHERE Id = @Id";
            _db.Execute(query, newRecord);
        }

        public void Delete(Guid bookId)
        {
            DeleteBook(bookId);
            string stringBookId = bookId.ToString();

            string query = "DELETE FROM Books WHERE Id = @stringBookId";
            _db.Query(query, new { stringBookId });
        }

        public void DeleteBook(Guid bookId)
        {
            var stringBookId = bookId.ToString();

            string query = "DELETE FROM BooksAuthors WHERE BookId = @stringBookId";
            _db.Query(query, new { stringBookId });
        }

        public List<Book> GetBooks(List<Guid> booksListIds)
        {
            var arrayIds = booksListIds.ToArray();

            string query = "SELECT * FROM Books WHERE Id IN @arrayIds";
            var booksList = _db.Query<Book>(query, arrayIds).ToList();
            return booksList;
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
                _db.Query(query, bookAuthor);
            }
        }
    }
}
