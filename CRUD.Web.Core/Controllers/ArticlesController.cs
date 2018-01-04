using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CRUD.Services;
using CRUD.Views;
using Microsoft.Extensions.Configuration;
using CRUD.Web.Core.Controllers;

namespace CRUD.Web.Controllers
{
    public class ArticlesController : BaseController
    {
        private ArticlesService _articlesService;

        public ArticlesController(IConfiguration configuration) : base(configuration)
        {
            _articlesService = new ArticlesService(ConnectionString);
        }

        [HttpGet]
        public List<ArticleViewModel> Read()
        {
            var articles = _articlesService.Read();
            if (articles == null)
            {
                return null;
            }
            return articles;
        }

        [HttpPost]
        public IActionResult Create([FromBody]ArticleViewModel articleViewModel)
        {
            _articlesService.Create(articleViewModel);
            return Ok(articleViewModel);
        }

        [HttpPost]
        public IActionResult Update([FromBody]ArticleViewModel articleViewModel)
        {
            _articlesService.Update(articleViewModel);
            return Ok(articleViewModel);
        }

        [HttpPost]
        public IActionResult Delete([FromBody]ArticleViewModel articleViewModel)
        {
            _articlesService.Delete(articleViewModel);
            return Ok();
        }
    }
}
