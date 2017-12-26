using CRUD.DataAccess;
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
  public class AuthorsController : ApiController
  {
    private AuthorsService _authorsService;

    public AuthorsController()
    {
      string connectionString = WebConfigurationManager.ConnectionStrings["ConnectionStringDB"].ConnectionString;
      _authorsService = new AuthorsService(connectionString);
    }

    [HttpGet]
    public List<Author> Read()
    {    
      var authorViewModel = _authorsService.Read();
      return authorViewModel;
    }

    [HttpPost]
    public IHttpActionResult Create(AuthorViewModel authorViewModel)
    {
      _authorsService.Create(authorViewModel);
      return Ok(authorViewModel);
    }

    [HttpPost]
    public IHttpActionResult Update(AuthorViewModel authorViewModel)
    {
      _authorsService.Update(authorViewModel);
      return Ok(authorViewModel);
    }

    [HttpPost]
    public IHttpActionResult Delete(AuthorViewModel authorViewModel)
    {
      var Id = authorViewModel.Id;
      _authorsService.Delete(authorViewModel.Id);
      return Ok(Id);
    }
  }
}
