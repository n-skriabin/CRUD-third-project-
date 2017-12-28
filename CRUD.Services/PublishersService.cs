﻿using CRUD.DataAccess;
using CRUD.DataAccess.Repositories;
using CRUD.Domain;
using CRUD.Views;
using CRUD.Views.ResponseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.Services
{
    public class PublishersService
    {
        private BookRepository _bookRepository;
        private JournalRepository _journalRepository;
        private PublisherRepository _publisherRepository;

        public PublishersService(string ConnectionString)
        {
            _bookRepository = new BookRepository(ConnectionString);
            _journalRepository = new JournalRepository(ConnectionString);
            _publisherRepository = new PublisherRepository(ConnectionString);
        }

        public List<PublisherViewModel> Read()
        {
            var publishers = _publisherRepository.Read();
            List<PublisherViewModel> publisherListForViewModel = new List<PublisherViewModel>();

            foreach(var publisher in publishers)
            {
                var journals = _journalRepository.GetJournals(publisher.Id);
                var books = _bookRepository.GetBooks(publisher.Id); 
                PublisherViewModel publisherViewModel = new PublisherViewModel
                {
                    Id = publisher.Id,
                    Name = publisher.Name,
                    BooksList = _bookRepository.GetBooks(publisher.Id),
                    JournalsList = _journalRepository.GetJournals(publisher.Id),
                };
                publisherViewModel.BookIds = GetBookIdList(publisherViewModel.BooksList);
                publisherViewModel.JournalIds = GetJournalIdList(publisherViewModel.JournalsList);
                publisherListForViewModel.Add(publisherViewModel);
            }
            return publisherListForViewModel;
        }

        public PublisherViewModel Create(ResponsePublisherViewModel responsePublisherViewModel)
        {
            responsePublisherViewModel.Id = Guid.NewGuid();

            var publisher = ViewModelToDomain(responsePublisherViewModel);
            _publisherRepository.Create(publisher, responsePublisherViewModel.JournalIds, responsePublisherViewModel.BookIds);

            var publisherViewModel = DomainToViewModel(responsePublisherViewModel, publisher.Id);

            return publisherViewModel;
        }

        public PublisherViewModel Update(ResponsePublisherViewModel responsePublisherViewModel)
        {
            var publisher = ViewModelToDomain(responsePublisherViewModel);
            _publisherRepository.Update(publisher, responsePublisherViewModel.JournalIds, responsePublisherViewModel.BookIds);

            var publisherViewModel = DomainToViewModel(responsePublisherViewModel, publisher.Id);

            return publisherViewModel;
        }

        public void Delete(PublisherViewModel publisherViewModel)
        {
            _publisherRepository.Delete(publisherViewModel.Id);
        }     
        
        public Publisher ViewModelToDomain(ResponsePublisherViewModel responsePublisherViewModel)
        {
            Publisher publisher = new Publisher
            {
                Id = responsePublisherViewModel.Id,
                Name = responsePublisherViewModel.Name,
            };

            return publisher;
        }

        public PublisherViewModel DomainToViewModel(ResponsePublisherViewModel responsePublisherViewModel, Guid publisherId)
        {
            PublisherViewModel publisherViewModel = new PublisherViewModel
            {
                Id = responsePublisherViewModel.Id,
                Name = responsePublisherViewModel.Name,
                BooksList = _bookRepository.GetBooks(publisherId),
                JournalsList = _journalRepository.GetJournals(publisherId),
            };

            return publisherViewModel;
        }

        public List<Guid> GetBookIdList(List<Book> booksList)
        {
            var ids = new List<Guid>();
            foreach (var book in booksList)
            {
                ids.Add(book.Id);
            }

            return ids;
        }

        public List<Guid> GetJournalIdList(List<Journal> journalsList)
        {
            var ids = new List<Guid>();
            foreach (var book in journalsList)
            {
                ids.Add(book.Id);
            }

            return ids;
        }
    }
}
