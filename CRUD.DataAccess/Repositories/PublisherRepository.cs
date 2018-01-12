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
    public class PublisherRepository
    {
        private IDbConnection _db;

        public PublisherRepository(string connectionString)
        {
            _db = new SqlConnection(connectionString);
        }

        public List<PublisherResponseModel> GetAll()
        {
            string query = @"SELECT Books.*, Journals.*, Publishers.*
                             FROM Publishers 
                             FULL OUTER JOIN Journals ON Journals.PublisherId = Publishers.Id
                             FULL OUTER JOIN Books ON Books.PublisherId = Publishers.Id";
            var publishersDictionary = new Dictionary<string, PublisherResponseModel>();
            _db.Query<Book, Journal, Publisher, PublisherResponseModel>(query, (book, journal, publisher) =>
            {
                if (publisher != null)
                {
                    var publisherResponseModel = new PublisherResponseModel();
                    if (!publishersDictionary.TryGetValue(publisher.Id.ToString(), out publisherResponseModel))
                    {
                        publisherResponseModel = new PublisherResponseModel
                        {
                            Id = publisher.Id,
                            Name = publisher.Name,
                        };
                        publishersDictionary.Add(publisherResponseModel.Id.ToString(), publisherResponseModel);
                    }

                    if (publisherResponseModel.Books == null)
                        publisherResponseModel.Books = new HashSet<Book>();

                    if (publisherResponseModel.Journals == null)
                        publisherResponseModel.Journals = new HashSet<Journal>();

                    publisherResponseModel.Books.Add(book);
                    publisherResponseModel.Journals.Add(journal);

                    return publisherResponseModel;
                }
                return null;
            }).AsQueryable();

            var publisherlViewModelList = publishersDictionary.Values.ToList();
            return publisherlViewModelList;
        }

        public void Create(Publisher publisher, List<string> journalsId, List<string> booksId)
        {
            string query = "UPDATE Books SET PublisherId = @Id WHERE Id IN @arrayBooksIds";
            var arrayBooksIds = booksId.ToArray();
            _db.Execute(query, new { arrayBooksIds, Id = publisher.Id });

            query = "UPDATE Journals SET PublisherId = @Id WHERE Id IN @arrayJournalsIds";
            var arrayJournalsIds = journalsId.ToArray();
            _db.Execute(query, new { arrayJournalsIds, Id = publisher.Id });

            query = "INSERT INTO Publishers (Id, Name, LastUpdateDate) VALUES (@Id, @Name, @LastUpdateDate)";
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

            newRecord.LastUpdateDate = DateTime.UtcNow;
            query = "UPDATE Publishers SET Name = @Name, LastUpdateDate = @LastUpdateDate WHERE Id = @Id";
            _db.Query(query, newRecord);
        }

        public void Delete(Guid publisherId)
        {
            PublisherIdNull(publisherId);

            Publisher publisher = new Publisher
            {
                Id = publisherId
            };
            _db.Delete(publisher);
        }

        public void PublisherIdNull(Guid publisherId)
        {
            var emptyGuid = Guid.Empty;

            string query = "UPDATE Books SET PublisherId = @emptyGuid WHERE PublisherId = @publisherId";
            _db.Query(query, new { publisherId, emptyGuid });

            query = "UPDATE Journals SET PublisherId = @emptyGuid WHERE PublisherId = @publisherId";
            _db.Query(query, new { publisherId, emptyGuid });
        }  
    }
}
