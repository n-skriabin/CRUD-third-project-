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
            var publisherList = _publisherRepository.GetAll();
            var publisherViewModelList = new List<PublisherViewModel>();

            foreach (var publisher in publisherList)
            {
                var publisherViewModel = new PublisherViewModel
                {
                    Id = publisher.Id.ToString(),
                    Name = publisher.Name,
                    BookList = publisher.Books,
                    JournalList = publisher.Journals,
                    BookIds = GetBookIds(publisher.Books),
                    JournalIds = GetJournalIds(publisher.Journals)
                };
            }

            return publisherViewModelList;
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
            var id = Guid.Parse(publisherViewModel.Id);
            _publisherRepository.Delete(id);
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
                BookList = _bookRepository.GetBooks(publisherId),
                JournalList = _journalRepository.GetJournals(publisherId),
            };
            return publisherViewModel;
        }

        private HashSet<string> GetBookIds(List<Book> books)
        {
            var bookIds = new HashSet<string>();

            foreach (var book in books)
            {
                bookIds.Add(book.Id.ToString());
            }

            return bookIds;
        }

        private HashSet<string> GetJournalIds(List<Journal> journals)
        {
            var journalIds = new HashSet<string>();

            foreach (var journal in journals)
            {
                journalIds.Add(journal.Id.ToString());
            }

            return journalIds;
        }
    }
}
