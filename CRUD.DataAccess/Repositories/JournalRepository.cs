using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;
using System.Threading.Tasks;
using CRUD.Domain;
using System.Data;
using System.Data.SqlClient;
using Dapper;

namespace CRUD.DataAccess.Repositories
{
    public class JournalRepository
    {
        private IDbConnection _db;

        public JournalRepository(string connectionString)
        {
            _db = new SqlConnection(connectionString);
        }

        public List<Journal> Read()
        {
            string query = "SELECT * FROM Journals";
            var journals = _db.Query<Journal>(query).ToList();
            return journals;
        }

        public void Create(Journal journal, List<string> articlesIds)
        {
            UpdateArticles(journal.Id, articlesIds);

            string query = "INSERT INTO Journals (Id, Name, Date) VALUES (@Id, @Name, @Date)";
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

            query = "UPDATE Journals SET Name = @Name, Date = @Date WHERE Id = @Id";
            _db.Execute(query, journal);
        }

        public void Delete(Guid journalId)
        {
            var emptyGuid = Guid.Empty;

            string query = "UPDATE Articles SET JournalId = @emptyGuid WHERE JournalId = @journalId";
            _db.Query(query, new { journalId, emptyGuid });

            query = "DELETE FROM Journals WHERE Id = @journalId";
            _db.Query(query, new { journalId });
        }

        public List<Journal> GetJournals(List<Guid> journalsListId)
        {
            var arrayJournalsIds = journalsListId.ToArray();

            string query = "SELECT * FROM Journals WHERE Id IN @arrayJournalsIds";
            var journals = _db.Query<Journal>(query, new { arrayJournalsIds }).ToList();
            return journals;
        }

        public List<Journal> GetJournals(Guid publisherId)
        {
            string query = "SELECT * FROM Journals WHERE PublisherId = @publisherId";
            var journalsList = _db.Query<Journal>(query, new { publisherId }).ToList();
            return journalsList;
        }

        public void UpdateArticles(Guid id, List<string> articlesIds)
        {
            var arrayArticlesIds = articlesIds.ToArray();
            string query;

            foreach (var articleId in arrayArticlesIds)
            {
                query = "UPDATE Articles SET JournalId = @id WHERE Id = @articleId";
                _db.Query(query, new { articleId, id });
            }
        }
    }
}
