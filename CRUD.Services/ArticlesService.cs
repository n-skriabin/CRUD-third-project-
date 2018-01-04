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

        public ArticlesService(string ConnectionString)
        {
            _articleRepository = new ArticleRepository(ConnectionString);
            _authorRepository = new AuthorRepository(ConnectionString);
        }

        public List<ArticleViewModel> Read()
        {
            var articlesList = _articleRepository.Read();
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
            _articleRepository.Delete(Guid.Parse(articleViewModel.Id));
        }

        public Article ViewModelToDomain(ArticleViewModel articleViewModel)
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
