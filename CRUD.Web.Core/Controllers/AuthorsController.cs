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
  public class AuthorsController : Controller
  {
    private AuthorsService _authorsService;

    public AuthorsController(IConfiguration configuration)
    {
        _authorsService = new AuthorsService(ConnectionString.GetConnectionString(configuration));
    }

    [HttpGet]
    public IActionResult Read()
    {
      var authorViewModel = _authorsService.Read();
      return Ok(authorViewModel);
    }

    [HttpPost]
    public IActionResult Create([FromBody]AuthorViewModel authorViewModel)
    {
      _authorsService.Create(authorViewModel);
      return Ok(authorViewModel);
    }

    [HttpPost]
    public IActionResult Update([FromBody]AuthorViewModel authorViewModel)
    {
      _authorsService.Update(authorViewModel);
      return Ok(authorViewModel);
    }

    [HttpPost]
    public IActionResult Delete([FromBody]AuthorViewModel authorViewModel)
    {
      var Id = Guid.Parse(authorViewModel.Id);
      _authorsService.Delete(Id);
      return Ok();
    }
  }
}
