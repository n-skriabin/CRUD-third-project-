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

namespace CRUD.Web.Core.Controllers
{
  [Route("api/[controller]/[action]")]
  public class AuthorsController : Controller
  {
    private AuthorsService _authorsService;
    private readonly IConfiguration _configuration;

    public AuthorsController(IConfiguration configuration)
    {
      _configuration = configuration;
      string connectionString = _configuration.GetConnectionString("DefaultConnection");
      _authorsService = new AuthorsService(connectionString);
    }

    [HttpGet]
    public List<Author> Read()
    {
      var authorViewModel = _authorsService.Read();
      return authorViewModel;
    }

    [HttpPost]
    public AuthorViewModel Create(AuthorViewModel authorViewModel)
    {
      _authorsService.Create(authorViewModel);
      return authorViewModel;
    }

    [HttpPost]
    public AuthorViewModel Update(AuthorViewModel authorViewModel)
    {
      _authorsService.Update(authorViewModel);
      return authorViewModel;
    }

    [HttpPost]
    public void Delete(AuthorViewModel authorViewModel)
    {
      var Id = authorViewModel.Id;
      _authorsService.Delete(authorViewModel.Id);
    }
  }
}
