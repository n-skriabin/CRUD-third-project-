using System;
using System.Collections.Generic;
using System.Linq;
using CRUD.Domain;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using CRUD.Views;

namespace CRUD.DataAccess.Repositories
{
    public class ArticleRepository 
    {
        private IDbConnection _db;

        private string _connectionString = null;
        public ArticleRepository(string connectionString)
        {
            _db = new SqlConnection(connectionString);
            _connectionString = connectionString;

        }

        public List<ArticleViewModel> Read()
        {
            string query = @"SELECT Articles.* , Authors.* 
                             FROM Articles 
                             INNER JOIN Authors ON Articles.AuthorId = Authors.Id";

            var articleDictionary = new Dictionary<Guid, ArticleViewModel>();
            _db.Query<Article, Author, ArticleViewModel>(query, (article, author) =>
            {
                var articleViewModel = new ArticleViewModel
                {
                    Id = article.Id.ToString(),
                    Name = article.Name,
                    Year = article.Year,
                    AuthorId = author.Id.ToString(),
                    Abbreviated = author.Abbreviated
                };
                articleDictionary.Add(article.Id, articleViewModel);
                return articleViewModel;
            }).AsQueryable();

            var articleViewModelsList = articleDictionary.Values.ToList();
            return articleViewModelsList;
        }

        public void Create(Article article)
        {
            string query = "INSERT INTO Articles (Id, Name, Year, AuthorId, DateTime) VALUES(@Id, @Name, @Year, @AuthorId, @DateTime);";
            _db.Query(query, article);
        }

        public void Update(Article newRecord)
        {
            string query = "UPDATE Articles SET Name = @Name, Year = @Year, AuthorId = @AuthorId, DateTime = @DateTime WHERE Id = @Id";
            newRecord.DateTime = DateTime.UtcNow;
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

        public List<Article> GetArticles(List<string> articlesIds)
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
