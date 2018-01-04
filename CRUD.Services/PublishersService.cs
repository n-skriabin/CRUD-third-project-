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
                    Id = publisher.Id.ToString(),
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

        public PublisherViewModel Create(PostPublisherViewModel postPublisherViewModel)
        {
            postPublisherViewModel.Id = postPublisherViewModel.GetId();

            var publisher = ViewModelToDomain(postPublisherViewModel);
            _publisherRepository.Create(publisher, postPublisherViewModel.JournalIds, postPublisherViewModel.BookIds);

            var publisherViewModel = DomainToViewModel(postPublisherViewModel, publisher.Id);

            return publisherViewModel;
        }

        public PublisherViewModel Update(PostPublisherViewModel postPublisherViewModel)
        {
            var publisher = ViewModelToDomain(postPublisherViewModel);
            _publisherRepository.Update(publisher, postPublisherViewModel.JournalIds, postPublisherViewModel.BookIds);

            var publisherViewModel = DomainToViewModel(postPublisherViewModel, publisher.Id);

            return publisherViewModel;
        }

        public void Delete(PublisherViewModel publisherViewModel)
        {
            _publisherRepository.Delete(Guid.Parse(publisherViewModel.Id));
        }     
        
        public Publisher ViewModelToDomain(PostPublisherViewModel postPublisherViewModel)
        {
            Publisher publisher = new Publisher
            {
                Id = Guid.Parse(postPublisherViewModel.Id),
                Name = postPublisherViewModel.Name,
            };

            return publisher;
        }

        public PublisherViewModel DomainToViewModel(PostPublisherViewModel postPublisherViewModel, Guid publisherId)
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

        public List<string> GetBookIdList(List<Book> booksList)
        {
            var ids = new List<string>();
            foreach (var book in booksList)
            {
                ids.Add(book.Id.ToString());
            }

            return ids;
        }

        public List<string> GetJournalIdList(List<Journal> journalsList)
        {
            var ids = new List<string>();
            foreach (var book in journalsList)
            {
                ids.Add(book.Id.ToString());
            }

            return ids;
        }
    }
}
