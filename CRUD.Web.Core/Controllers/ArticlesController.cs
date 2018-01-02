using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CRUD.Services;
using CRUD.DataAccess;
using CRUD.Views;
using Microsoft.Extensions.Configuration;

namespace CRUD.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ArticlesController : Controller
    {
        ArticlesService articlesService;
        private readonly IConfiguration _configuration;

        public ArticlesController(IConfiguration configuration)
        {
            _configuration = configuration;
            string connectionString = _configuration.GetConnectionString("DefaultConnection");
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
