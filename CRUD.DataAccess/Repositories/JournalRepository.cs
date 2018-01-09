using System;
using System.Collections.Generic;
using System.Linq;
using CRUD.Domain;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using CRUD.Views;
using Dapper.Contrib.Extensions;

namespace CRUD.DataAccess.Repositories
{
    public class JournalRepository
    {
        private IDbConnection _db;

        public JournalRepository(string connectionString)
        {
            _db = new SqlConnection(connectionString);
        }

        public List<JournalViewModel> GetAll()
        {
            string query = @"SELECT Articles.*, Journals.*
                             FROM Articles 
                             INNER JOIN Journals on Articles.JournalId = Journals.Id";
            var journalsDictionary = new Dictionary<string, JournalViewModel>();
            _db.Query<Article, Journal, JournalViewModel>(query, (article, journal) =>
            {
                JournalViewModel journalViewModel = new JournalViewModel();
                if (!journalsDictionary.TryGetValue(journal.Id.ToString(), out journalViewModel))
                {
                    journalViewModel = new JournalViewModel
                    {
                        Id = journal.Id.ToString(),
                        Name = journal.Name,
                        Date = journal.Date
                    };
                    journalsDictionary.Add(journal.Id.ToString(), journalViewModel);
                }

                if (journalViewModel.ArticlesList == null)
                    journalViewModel.ArticlesList = new List<Article>();

                if (journalViewModel.ArticleIds == null)
                    journalViewModel.ArticleIds = new HashSet<string>();

                journalViewModel.ArticlesList.Add(article);
                journalViewModel.ArticleIds.Add(article.Id.ToString());

                return journalViewModel;
            }).AsQueryable();

            var journalViewModelList = journalsDictionary.Values.ToList();
            return journalViewModelList;
        }

        public void Create(Journal journal, List<string> articlesIds)
        {
            UpdateArticles(journal.Id, articlesIds);

            string query = "INSERT INTO Journals (Id, Name, Date, LastUpdateDate) VALUES (@Id, @Name, @Date, @LastUpdateDate)";
            _db.Query(query, journal);
        }

        public void Update(Journal journal, List<string> articlesId)
        {
            var arrayArticlesIds = articlesId.ToArray();
            var emptyGuid = Guid.Empty;
            var journalId = journal.Id;

            string query = "UPDATE Articles SET JournalId = @emptyGuid WHERE JournalId = @journalId";
            _db.Query(query, new { journalId, emptyGuid });

            query = "UPDATE Articles SET JournalId = @Id WHERE Id IN @arrayArticlesIds";
            _db.Query(query, new { arrayArticlesIds, Id = journal.Id });

            query = "UPDATE Journals SET Name = @Name, Date = @Date, LastUpdateDate = @LastUpdateDate WHERE Id = @Id";
            journal.LastUpdateDate = DateTime.UtcNow;
            _db.Execute(query, journal);
        }

        public void Delete(Guid journalId)
        {
            var emptyGuid = Guid.Empty;

            string query = "UPDATE Articles SET JournalId = @emptyGuid WHERE JournalId = @journalId";
            _db.Query(query, new { journalId, emptyGuid });

            Journal journal = new Journal
            {
                Id = journalId
            };
            _db.Delete(journal);

        }

        public List<Journal> GetJournals(Guid publisherId)
        {
            string query = "SELECT * FROM Journals WHERE PublisherId = @publisherId";
            var journalsList = _db.Query<Journal>(query, new { publisherId }).ToList();
            return journalsList;
        }

        public void UpdateArticles(Guid id, List<string> articlesIds)
        {
            //var arrayArticlesIds = articlesIds.ToArray();
            string query = "UPDATE Articles SET JournalId = @id WHERE Id IN @articlesIds";
            _db.Query(query, new { id, articlesIds });
            //foreach (var articleId in arrayArticlesIds)
            //{
            //    query = "UPDATE Articles SET JournalId = @id WHERE Id = @articleId";
            //    _db.Query(query, new { articleId, id });
            //}
        }
    }
}
