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
            var articleList = _articleRepository.GetAll();
            var articleViewModelList = new List<ArticleViewModel>();

            foreach (var article in articleList)
            {
                var author = AuthorToArticleAuthor(article.Author);
                var articleViewModel = new ArticleViewModel
                {
                    Id = article.Id.ToString(),
                    Name = article.Name,
                    Year = article.Year,
                    Author = author,
                    AuthorId = article.Author.Id.ToString(),
                    Abbreviated = article.Author.Abbreviated
                };

                articleViewModelList.Add(articleViewModel);
            }
                
            return articleViewModelList;
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

        private AuthorViewModel AuthorToArticleAuthor(Author author)
        {
            var authorViewModel = new AuthorViewModel();
            authorViewModel.Id = author.Id.ToString();
            authorViewModel.FirstName = author.FirstName;
            authorViewModel.LastName = author.LastName;
            authorViewModel.Patronymic = author.Patronymic;
            authorViewModel.Abbreviated = author.Abbreviated;
            return authorViewModel;
        }
    }
}
