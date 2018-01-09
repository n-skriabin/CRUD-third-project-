using System;
using System.Collections.Generic;
using System.Linq;
using CRUD.Domain;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using Dapper.Contrib;
using CRUD.Views;
using Dapper.Contrib.Extensions;

namespace CRUD.DataAccess.Repositories
{
    public class ArticleRepository 
    {
        private IDbConnection _db;

        private string _connectionString;
        public ArticleRepository(string connectionString)
        {
            _db = new SqlConnection(connectionString);
            _connectionString = connectionString;
        }

        public List<ArticleViewModel> GetAll()
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
            string query = "INSERT INTO Articles (Id, Name, Year, AuthorId, LastUpdateDate) VALUES(@Id, @Name, @Year, @AuthorId, @LastUpdateDate);";
            _db.Query(query, article);
        }

        public void Update(Article newRecord)
        {
            string query = "UPDATE Articles SET Name = @Name, Year = @Year, AuthorId = @AuthorId, LastUpdateDate = @LastUpdateDate WHERE Id = @Id";
            newRecord.LastUpdateDate = DateTime.UtcNow;
            _db.Execute(query, newRecord);
        }

        public void Delete(Guid id)
        {
            Article article = new Article
            {
                Id = id
            };
            _db.Delete(article);
        }

        public List<Article> GetArticles(List<string> articlesIds)
        {
            string query = "SELECT * FROM Articles WHERE Id IN @arrayIds";
            var arrayIds = articlesIds.ToArray();
            var articles = _db.Query<Article>(query, new { arrayIds }).ToList();
            return articles;
        }
    }
}
