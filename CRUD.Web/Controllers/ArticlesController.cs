using CRUD.Services;
using CRUD.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using System.Web.Http;

namespace CRUD.Web.Controllers
{
    public class ArticlesController : ApiController
    {
        ArticlesService articlesService;

        public ArticlesController()
        {
            string connectionString = WebConfigurationManager.ConnectionStrings["ConnectionStringDB"].ConnectionString;
            articlesService = new ArticlesService(connectionString);
        }

        [HttpGet]
        public List<ArticleViewModel> Read()
        {
            var articles = articlesService.Read();
            if (articles == null)
            {
                return null;
            }
            return articles;
        }

        [HttpPost]
        public void Create(ArticleViewModel articleViewModel)
        {
            articlesService.Create(articleViewModel);
        }

        [HttpPost]
        public void Update(ArticleViewModel articleViewModel)
        {
            articlesService.Update(articleViewModel);
        }

        [HttpPost]
        public void Delete(ArticleViewModel articleViewModel)
        {
            articlesService.Delete(articleViewModel);
        }
    }
}
