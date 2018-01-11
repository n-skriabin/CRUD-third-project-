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
    public class JournalRepository
    {
        private IDbConnection _db;

        public JournalRepository(string connectionString)
        {
            Context context = new Context(connectionString);
            _db = new SqlConnection(connectionString);
        }

        public List<Journal> GetAll()
        {
            string query = @"SELECT Articles.*, Journals.*
                             FROM Articles 
                             INNER JOIN Journals on Articles.JournalId = Journals.Id";
            var journalsDictionary = new Dictionary<string, Journal>();
            _db.Query<Article, JournalResponseModel, Journal>(query, (article, journalResponseModel) =>
            {
                var journal = new Journal();
                if (!journalsDictionary.TryGetValue(journal.Id.ToString(), out journal))
                {
                    journal = new Journal
                    {
                        Id = journalResponseModel.Id,
                        Name = journalResponseModel.Name,
                        Date = journalResponseModel.Date
                    };
                    journalsDictionary.Add(journal.Id.ToString(), journal);
                }

                if (journal.Articles == null)
                    journal.Articles = new List<Article>();

                journal.Articles.Add(article);

                return journal;
            }).AsQueryable();

            var journalList = journalsDictionary.Values.ToList();
            return journalList;
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

            journal.LastUpdateDate = DateTime.UtcNow;
            _db.Update(journal);
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
            string query = "UPDATE Articles SET JournalId = @id WHERE Id IN @articlesIds";
            _db.Query(query, new { id, articlesIds });
        }
    }
}
