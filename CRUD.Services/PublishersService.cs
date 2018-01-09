using CRUD.DataAccess.Repositories;
using CRUD.Domain;
using CRUD.Views;
using CRUD.Views.ResponseModels;
using System;
using System.Collections.Generic;

namespace CRUD.Services
{
    public class PublishersService
    {
        private BookRepository _bookRepository;
        private JournalRepository _journalRepository;
        private PublisherRepository _publisherRepository;

        public PublishersService(string connectionString)
        {
            _bookRepository = new BookRepository(connectionString);
            _journalRepository = new JournalRepository(connectionString);
            _publisherRepository = new PublisherRepository(connectionString);
        }

        public List<PublisherViewModel> GetAll()
        {
            var publishers = _publisherRepository.GetAll();
            return publishers;
        }

        public PublisherViewModel Create(PostPublisherViewModel postPublisherViewModel)
        {
            var publisher = ViewModelToDomain(postPublisherViewModel);
            _publisherRepository.Create(publisher, postPublisherViewModel.JournalIds, postPublisherViewModel.BookIds);

            var publisherViewModel = DomainToViewModel(postPublisherViewModel, publisher.Id);

            return publisherViewModel;
        }

        public PublisherViewModel Update(PostPublisherViewModel postPublisherViewModel)
        {
            var publisher = ViewModelToDomain(postPublisherViewModel);
            publisher.Id = Guid.Parse(postPublisherViewModel.Id);
            _publisherRepository.Update(publisher, postPublisherViewModel.JournalIds, postPublisherViewModel.BookIds);
            publisher.Id = Guid.Parse(postPublisherViewModel.Id);

            var publisherViewModel = DomainToViewModel(postPublisherViewModel, publisher.Id);

            return publisherViewModel;
        }

        public void Delete(PublisherViewModel publisherViewModel)
        {
            _publisherRepository.Delete(Guid.Parse(publisherViewModel.Id));
        }

        private Publisher ViewModelToDomain(PostPublisherViewModel postPublisherViewModel)
        {
            Publisher publisher = new Publisher
            {
                Name = postPublisherViewModel.Name,
            };
            return publisher;
        }

        private PublisherViewModel DomainToViewModel(PostPublisherViewModel postPublisherViewModel, Guid publisherId)
        {
            PublisherViewModel publisherViewModel = new PublisherViewModel
            {
                Id = postPublisherViewModel.Id,
                Name = postPublisherViewModel.Name,
                BooksList = _bookRepository.GetBooks(publisherId),
                JournalsList = _journalRepository.GetJournals(publisherId),
            };
            return publisherViewModel;
        }
    }
}
