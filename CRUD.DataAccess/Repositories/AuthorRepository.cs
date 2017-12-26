using CRUD.Domain;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.DataAccess.Repositories
{
    public class AuthorRepository
    {
        private IDbConnection _db;

        public AuthorRepository(string connectionString)
        {
            _db = new SqlConnection(connectionString);
        }

        public List<Author> Read()
        {
            string query = "SELECT * FROM Authors";
            var authors = new List<Author>();
            authors = _db.Query<Author>(query).ToList();
            return authors;
        }

        public void Create(Author author)
        {
            string query = "INSERT INTO Authors (Id, FirstName, LastName, Patronymic, Abbreviated) VALUES(@Id, @FirstName, @LastName, @Patronymic, @Abbreviated)";
            _db.Query(query, author);
        }

        public void Delete(Guid AuthorId)
        {
            string query = "SELECT * FROM BooksAuthors WHERE AuthorId = @AuthorId";
            var deletingAuthorBooks = _db.Query<BooksAuthors>(query, new { AuthorId }).ToArray();

            query = "DELETE FROM BooksAuthors WHERE AuthorId = @AuthorId";
            _db.Query(query, new { AuthorId });

            foreach (var bookAuthor in deletingAuthorBooks) 
            {
                query = "SELECT * FROM BooksAuthors WHERE BookId = @BookId";
                var list = _db.Query<BooksAuthors>(query, new { BookId = bookAuthor.BookId }).ToList();

                if (list.Count == 0)
                {
                    query = "DELETE FROM Books WHERE Id = @BookId";
                    _db.Query(query, new { BookId = bookAuthor.BookId });
                }
            }

            query = "DELETE FROM Authors WHERE Id = @AuthorId";
            _db.Query(query, new { AuthorId });

            query = "DELETE FROM Articles WHERE AuthorId = @AuthorId";
            _db.Query(query, new { AuthorId });
        }

        public void Update(Author newRecord)
        {
            string query = "UPDATE Authors SET FirstName = @FirstName, LastName = @LastName, Patronymic = @Patronymic WHERE Id = @Id";
            _db.Execute(query, newRecord);
        }

        public Author GetAuthor(Guid AuthorId)
        {
            string query = "SELECT * FROM Authors WHERE Id = @AuthorId";
            var author = _db.Query<Author>(query, new { AuthorId }).FirstOrDefault();
            return author;
        }

        public List<Author> GetAuthors(Guid bookId)
        {
            string query = "SELECT * FROM Authors AS A LEFT JOIN BooksAuthors AS BA ON A.Id = BA.AuthorId WHERE BA.BookId = @Id";
            var authors = _db.Query<Author>(query, new { Id = bookId }).ToList();

            return authors;
        }
    }
}