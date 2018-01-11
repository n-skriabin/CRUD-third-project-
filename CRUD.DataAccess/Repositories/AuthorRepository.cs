using Dapper;
using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace CRUD.DataAccess.Repositories
{
    public class AuthorRepository
    {
        private IDbConnection _db;

        public AuthorRepository(string connectionString)
        {
            _db = new SqlConnection(connectionString);
        }

        public List<Author> GetAll()
        {
            var authors = _db.GetAll<Author>().ToList();
            return authors;
        }

        public void Create(Author author)
        {
            string query = @"INSERT INTO Authors (Id, FirstName, LastName, Patronymic, Abbreviated, LastUpdateDate) 
                             VALUES(@Id, @FirstName, @LastName, @Patronymic, @Abbreviated, @LastUpdateDate)";
            _db.Query(query, author);
        }

        public void Delete(Guid authorId)
        {
            DeleteRelationships(authorId);
            Author author = new Author
            {
                Id = authorId
            };
            _db.Delete(author);

            string query = "DELETE FROM Articles WHERE AuthorId = @AuthorId";
            _db.Query(query, new { authorId });
        }

        public void Update(Author newRecord)
        {
            newRecord.LastUpdateDate = DateTime.UtcNow;
            _db.Update(newRecord);
        }

        public Author GetAuthor(Guid authorId)
        {
            string query = "SELECT * FROM Authors WHERE Id = @AuthorId";
            var author = _db.Query<Author>(query, new { authorId }).FirstOrDefault();
            return author;
        }

        public List<Author> GetAuthors(Guid bookId)
        {
            string query = @"SELECT Authors.* 
                             FROM Authors 
                             LEFT JOIN BooksAuthors 
                             ON Authors.Id = BooksAuthors.AuthorId 
                             WHERE BooksAuthors.BookId = @Id";

            var authors = _db.Query<Author>(query, new { Id = bookId }).ToList();
            return authors;
        }

        private void DeleteRelationships(Guid authorId)
        {
            string query = "SELECT BookId FROM BooksAuthors WHERE AuthorId = @authorId";
            var deletingAuthorBooks = _db.Query<Guid>(query, new { authorId }).ToList();

            query = "DELETE FROM BooksAuthors WHERE AuthorId = @authorId";
            _db.Query(query, new { authorId });

            query = "DELETE FROM Books WHERE Id IN @deletingAuthorBooks";
            _db.Query(query, new { deletingAuthorBooks });
        }
    }
}