using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CRUD.Domain;
using System.Data.Entity;
using System.Data;
using System.Data.SqlClient;
using Dapper;

namespace CRUD.DataAccess.Repositories
{
    public class ArticleRepository 
    {
        private IDbConnection _db;

        public ArticleRepository(string connectionString)
        {
            _db = new SqlConnection(connectionString);
        }

        public List<Article> Read()
        {
            string query = "SELECT * FROM Articles";
            var articles = _db.Query<Article>(query).ToList();
            return articles;
        }

        public void Create(Article article)
        {
            string query = "INSERT INTO Articles (Id, Name, Year, AuthorId) VALUES(@Id, @Name, @Year, @AuthorId);";
            _db.Query(query, article);
        }

        public void Update(Article newRecord)
        {
            string query = "UPDATE Articles SET Name = @Name, Year = @Year, AuthorId = @AuthorId WHERE Id = @Id";
            _db.Execute(query, newRecord);
        }

        public void Delete(Guid id)
        {
            string query = "DELETE FROM Articles WHERE Id = @id";
            _db.Query(query, new { id });
        }

        public Article GetArticle(Guid id)
        {
            string query = "SELECT * FROM Articles WHERE Id = @id";
            var article = _db.Query<Article>(query, id).FirstOrDefault();
            return article;
        }

        public List<Article> GetArticles(List<Guid> articlesIds)
        {
            string query = "SELECT * FROM Articles WHERE Id IN @arrayIds";
            var arrayIds = articlesIds.ToArray();
            var articles = _db.Query<Article>(query, new { arrayIds }).ToList();
            return articles;
        }

        public List<Article> GetArticles(Guid? journalId)
        {
            string query = "SElECT * FROM Articles WHERE JournalId = @journalId";
            var articles = _db.Query<Article>(query, new { journalId }).ToList();
            return articles;
        }
    }
}
