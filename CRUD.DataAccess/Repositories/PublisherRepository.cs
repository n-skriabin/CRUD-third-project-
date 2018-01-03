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
    public class PublisherRepository
    {
        private IDbConnection _db;

        public PublisherRepository(string connectionString)
        {
            _db = new SqlConnection(connectionString);
        }

        public List<Publisher> Read()
        {
            string query = "SELECT * FROM Publishers";
            var publishers = _db.Query<Publisher>(query).ToList();
            return publishers;
        }

        public void Create(Publisher publisher, List<string> journalsId, List<string> booksId)
        {
            string query = "UPDATE Books SET PublisherId = @Id WHERE Id IN @arrayBooksIds";
            var arrayBooksIds = booksId.ToArray();
            _db.Execute(query, new { arrayBooksIds, Id = publisher.Id });

            query = "UPDATE Journals SET PublisherId = @Id WHERE Id IN @arrayJournalsIds";
            var arrayJournalsIds = journalsId.ToArray();
            _db.Execute(query, new { arrayJournalsIds, Id = publisher.Id });

            query = "INSERT INTO Publishers (Id, Name) VALUES (@Id, @Name)";
            _db.Query(query, publisher);
        }

        public void Update(Publisher newRecord, List<string> journalsId, List<string> booksId)
        {
            PublisherIdNull(newRecord.Id);

            string query = "UPDATE Books SET PublisherId = @Id WHERE Id IN @arrayBooksIds";
            var arrayBooksIds = booksId.ToArray();
            _db.Execute(query, new { arrayBooksIds, Id = newRecord.Id });

            query = "UPDATE Journals SET PublisherId = @Id WHERE Id IN @arrayJournalsIds";
            var arrayJournalsIds = journalsId.ToArray();
            _db.Execute(query, new { arrayJournalsIds, Id = newRecord.Id });

            query = "UPDATE Publishers SET Name = @Name WHERE Id = @Id";
            _db.Execute(query, new { Name = newRecord.Name, Id = newRecord.Id });
        }

        public void Delete(Guid publisherId)
        {
            PublisherIdNull(publisherId);

            string query = "DELETE FROM Publishers WHERE Id = @publisherId";
            _db.Query(query, new { publisherId });
        }

        public void PublisherIdNull(Guid publisherId)
        {
            var emptyGuid = Guid.Empty;

            string query = "UPDATE Books SET PublisherId = @emptyGuid WHERE PublisherId = @publisherId";
            _db.Query(query, new { publisherId, emptyGuid });

            query = "UPDATE Journals SET PublisherId = @emptyGuid WHERE PublisherId = @publisherId";
            _db.Query(query, new { publisherId, emptyGuid });
        }

        public void AddBooksJournals(string publisherId, List<Guid> journalsId, List<Guid> booksId)
        {
            string query = "UPDATE Books SET PublisherId = @publisherId WHERE Id IN @arrayBooksIds";
            var arrayBooksIds = booksId.ToArray();
            _db.Execute(query, new { arrayBooksIds, publisherId });

            query = "UPDATE Journals SET PublisherId = @publisherId WHERE Id IN @arrayJournalsIds";
            var arrayJournalsIds = journalsId.ToArray();
            _db.Execute(query, new { arrayJournalsIds, publisherId });
        }
    }
}
