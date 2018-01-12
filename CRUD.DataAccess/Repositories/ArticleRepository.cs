using System;
using System.Collections.Generic;
using System.Linq;
using CRUD.Domain;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using Dapper.Contrib.Extensions;
using CRUD.DataAccess.ReponseModels;

namespace CRUD.DataAccess.Repositories
{
    public class ArticleRepository 
    {
        private IDbConnection _db;

        private string _connectionString;
        public ArticleRepository(string connectionString)
        {
            var context = new Context(connectionString);
            _db = new SqlConnection(connectionString);
            _connectionString = connectionString;
        }

        public List<Article> GetAll()
        {
            string query = @"SELECT Articles.* , Authors.* 
                             FROM Articles 
                             INNER JOIN Authors ON Articles.AuthorId = Authors.Id";

            var articleDictionary = new Dictionary<Guid, Article>();

            _db.Query<ArticleResponseModel, Author, Article>(query, (articleResponseModel, author) =>
            {
                var article = new Article
                {
                    Id = articleResponseModel.Id,
                    Name = articleResponseModel.Name,
                    Year = articleResponseModel.Year,
                    AuthorId = author.Id,
                    Author = author
                };
                articleDictionary.Add(article.Id, article);

                return article;
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
            newRecord.LastUpdateDate = DateTime.UtcNow;
            string query = "UPDATE Articles SET Name = @Name, Year = @Year, AuthorId = @AuthorId, LastUpdateDate = @LastUpdateDate WHERE Id = @Id";
            _db.Query(query, newRecord);
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
