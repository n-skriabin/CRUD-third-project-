﻿using System;
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

        public List<Publisher> GetAll()
        {
            string query = @"SELECT Books.*, Journals.*, Publishers.*
                             FROM Publishers 
                             INNER JOIN Journals ON Journals.PublisherId = Publishers.Id
                             INNER JOIN Books ON Books.PublisherId = Publishers.Id";
            var publishersDictionary = new Dictionary<string, Publisher>();
            _db.Query<Book, Journal, PublisherResponseModel, Publisher>(query, (book, journal, publisherResponseModel) =>
            {
                var publisher = new Publisher();
                if (!publishersDictionary.TryGetValue(publisherResponseModel.Id.ToString(), out publisher))
                {
                    publisher = new Publisher
                    {
                        Id = publisherResponseModel.Id,
                        Name = publisherResponseModel.Name,
                    };
                    publishersDictionary.Add(publisherResponseModel.Id.ToString(), publisher);
                }

                if (publisher.Books == null)
                    publisher.Books = new List<Book>();

                if (publisher.Journals == null)
                    publisher.Journals = new List<Journal>();

                publisher.Books.Add(book);
                publisher.Journals.Add(journal);

                return publisher;
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
