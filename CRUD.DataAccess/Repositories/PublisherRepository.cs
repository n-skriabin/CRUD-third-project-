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
    public class PublisherRepository
    {
        private IDbConnection _db;

        public PublisherRepository(string connectionString)
        {
            _db = new SqlConnection(connectionString);
        }

        public List<PublisherViewModel> GetAll()
        {
            string query = @"SELECT Books.*, Journals.*, Publishers.*
                             FROM Publishers 
                             INNER JOIN Journals ON Journals.PublisherId = Publishers.Id
                             INNER JOIN Books ON Books.PublisherId = Publishers.Id";
            var publishersDictionary = new Dictionary<string, PublisherViewModel>();
            _db.Query<Book, Journal, Publisher, PublisherViewModel>(query, (book, journal, publisher) =>
            {
                PublisherViewModel publisherViewModel = new PublisherViewModel();
                if (!publishersDictionary.TryGetValue(publisher.Id.ToString(), out publisherViewModel))
                {
                    publisherViewModel = new PublisherViewModel
                    {
                        Id = publisher.Id.ToString(),
                        Name = publisher.Name,
                    };
                    publishersDictionary.Add(publisher.Id.ToString(), publisherViewModel);
                }

                if (publisherViewModel.BookIds == null)
                    publisherViewModel.BookIds = new HashSet<string>();

                if (publisherViewModel.JournalIds == null)
                    publisherViewModel.JournalIds = new HashSet<string>();

                publisherViewModel.BookIds.Add(book.Id.ToString());
                publisherViewModel.JournalIds.Add(journal.Id.ToString());

                return publisherViewModel;
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

            query = "INSERT INTO Publishers (Id, Name, DateTime) VALUES (@Id, @Name, @DateTime)";
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

            query = "UPDATE Publishers SET Name = @Name, DateTime = @DateTime WHERE Id = @Id";
            newRecord.DateTime = DateTime.UtcNow;
            _db.Execute(query, newRecord);
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
