using CRUD.DataAccess.Repositories;
using CRUD.Domain;
using CRUD.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.Services
{
    public class JournalsService
    {
        private JournalRepository _journalRepository;
        private ArticleRepository _articleRepository;
        private AuthorRepository _authorRepository;

        public JournalsService(string connectionString)
        {
            _journalRepository = new JournalRepository(connectionString);
            _articleRepository = new ArticleRepository(connectionString);
            _authorRepository = new AuthorRepository(connectionString);
        }

        public List<JournalViewModel> GetAll()
        {
            var journalList = _journalRepository.GetAll();
            var journalsViewModelList = new List<JournalViewModel>();

            foreach (var journal in journalList)
            {
                var journalViewModel = new JournalViewModel
                {
                    Id = journal.Id.ToString(),
                    Name = journal.Name,
                    Date = journal.Date,
                    ArticleList = journal.Articles,
                    ArticleIds = GetArticleIds(journal.Articles)
                };

                journalsViewModelList.Add(journalViewModel);
            }

            return journalsViewModelList;
        }

        public JournalViewModel Create(PostJournalViewModel postJournalViewModel)
        {
            var articlesIdList = postJournalViewModel.ArticleIds;
            var journal = ViewModelToDomain(postJournalViewModel);
            var journalViewModel = DomainToViewModel(postJournalViewModel);

            _journalRepository.Create(journal, articlesIdList);

            return journalViewModel;
        }

        public JournalViewModel Update(PostJournalViewModel postJournalViewModel)
        {
            var journal = ViewModelToDomain(postJournalViewModel);
            var journalViewModel = DomainToViewModel(postJournalViewModel);
            journal.Id = Guid.Parse(postJournalViewModel.Id);

            _journalRepository.Update(journal, postJournalViewModel.ArticleIds);

            return journalViewModel;
        }

        public void Delete(JournalViewModel journalViewModel)
        {
            var id = Guid.Parse(journalViewModel.Id);
            _journalRepository.Delete(id);
        }

        private Journal ViewModelToDomain(PostJournalViewModel postJournalViewModel)
        {
            Journal journal = new Journal()
            {
                Name = postJournalViewModel.Name,
                Date = postJournalViewModel.Date,
            };
            return journal;
        }

        private JournalViewModel DomainToViewModel(PostJournalViewModel postJournalViewModel)
        {
            var journalViewModel = new JournalViewModel
            {
                Id = postJournalViewModel.Id,
                Name = postJournalViewModel.Name,
                Date = postJournalViewModel.Date,
                ArticleList = _articleRepository.GetArticles(postJournalViewModel.ArticleIds)
            };
            return journalViewModel;
        }

        private List<string> GetArticleIds(List<Article> articles)
        {
            var articleIds = new List<string>();

            foreach (var article in articles)
            {
                articleIds.Add(article.Id.ToString());
            }

            return articleIds;
        }
    }
}
