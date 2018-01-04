using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CRUD.Services;
using CRUD.Views;
using Microsoft.Extensions.Configuration;
using CRUD.Web.Core.Controllers;
using System;

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
        public IActionResult Read()
        {
            try
            {
                List<ArticleViewModel> articles = _articlesService.Read();
                if (articles == null)
                {
                    return null;
                }
                return Ok(articles);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody]ArticleViewModel articleViewModel)
        {
            try
            {
                _articlesService.Create(articleViewModel);
                return Ok(articleViewModel);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Update([FromBody]ArticleViewModel articleViewModel)
        {
            try
            {
                _articlesService.Update(articleViewModel);
                return Ok(articleViewModel);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost]
        public IActionResult Delete([FromBody]ArticleViewModel articleViewModel)
        {
            try
            {
                _articlesService.Delete(articleViewModel);
                return Ok();
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}
