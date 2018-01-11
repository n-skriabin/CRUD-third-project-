﻿using CRUD.DataAccess.Repositories;
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
            var journals = _journalRepository.GetAll();         
            return journals;
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
                ArticlesList = _articleRepository.GetArticles(postJournalViewModel.ArticleIds),
            };
            return journalViewModel;
        }
    }
}