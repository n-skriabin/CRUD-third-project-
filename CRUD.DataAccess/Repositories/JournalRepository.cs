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
            var context = new Context(connectionString);
            _db = new SqlConnection(connectionString);
        }

        public List<JournalResponseModel> GetAll()
        {
            string query = @"SELECT Articles.*, Journals.*
                             FROM Articles 
                             FULL OUTER JOIN Journals on Articles.JournalId = Journals.Id";
            var journalsDictionary = new Dictionary<string, JournalResponseModel>();
            _db.Query<Article, Journal, JournalResponseModel>(query, (article, journal) =>
            {
                if (journal != null)
                {
                    var journalResponseModel = new JournalResponseModel();
                    if (!journalsDictionary.TryGetValue(journal.Id.ToString(), out journalResponseModel))
                    {
                        journalResponseModel = new JournalResponseModel
                        {
                            Id = journal.Id,
                            Name = journal.Name,
                            Date = journal.Date
                        };
                        journalsDictionary.Add(journal.Id.ToString(), journalResponseModel);
                    }

                    if (journalResponseModel.Articles == null)
                        journalResponseModel.Articles = new List<Article>();

                    journalResponseModel.Articles.Add(article);

                    return journalResponseModel;
                }
                return null;
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
            query = "UPDATE Journals SET Name = @Name, Date = @Date, LastUpdateDate = @LastUpdateDate WHERE Id = @Id";
            _db.Query(query, journal);
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
