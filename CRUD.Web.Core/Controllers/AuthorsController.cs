using System;
using Microsoft.AspNetCore.Mvc;
using CRUD.Services;
using CRUD.Views;
using Microsoft.Extensions.Configuration;

namespace CRUD.Web.Core.Controllers
{
    public class AuthorsController : BaseController
  {
    private AuthorsService _authorsService;

    public AuthorsController(IConfiguration configuration) : base(configuration)
    {
        _authorsService = new AuthorsService(ConnectionString);
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
