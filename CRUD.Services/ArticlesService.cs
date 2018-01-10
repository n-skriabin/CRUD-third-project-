using CRUD.DataAccess.Repositories;
using CRUD.Domain;
using CRUD.Views;
using System;
using System.Collections.Generic;

namespace CRUD.Services
{
    public class ArticlesService
    {
        private ArticleRepository _articleRepository;
        private AuthorRepository _authorRepository;

        public ArticlesService(string connectionString)
        {
            _articleRepository = new ArticleRepository(connectionString);
            _authorRepository = new AuthorRepository(connectionString);
        }

        public List<ArticleViewModel> GetAll()
        {
            var articlesList = _articleRepository.GetAll();
            return articlesList;
        }

        public void Create(ArticleViewModel articleViewModel)
        {
            articleViewModel.Abbreviated = _authorRepository.GetAuthor(Guid.Parse(articleViewModel.AuthorId)).Abbreviated;
            var article = ViewModelToDomain(articleViewModel);
            _articleRepository.Create(article);
        }

        public void Update(ArticleViewModel articleViewModel)
        {
            articleViewModel.Abbreviated = _authorRepository.GetAuthor(Guid.Parse(articleViewModel.AuthorId)).Abbreviated;
            var article = ViewModelToDomain(articleViewModel);
            article.Id = Guid.Parse(articleViewModel.Id);
            _articleRepository.Update(article);
        }

        public void Delete(ArticleViewModel articleViewModel)
        {
            Guid id = Guid.Parse(articleViewModel.Id);
            _articleRepository.Delete(id);
        }

        private Article ViewModelToDomain(ArticleViewModel articleViewModel)
        {
            Article article = new Article()
            {
                Name = articleViewModel.Name,
                Year = articleViewModel.Year,
                AuthorId = Guid.Parse(articleViewModel.AuthorId),
            };
            return article;
        }
    }
}
