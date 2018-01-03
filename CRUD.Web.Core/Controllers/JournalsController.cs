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
using CRUD.Web.Core;

namespace CRUD.Web.Controllers
{
    public class JournalsController : Controller
    {
        private JournalsService _journalsService;

        public JournalsController(IConfiguration configuration)
        {
            _journalsService = new JournalsService(ConnectionString.GetConnectionString(configuration));
        }

        [HttpGet]
        public IActionResult Read()
        {
            var journals = _journalsService.Read();
            if (journals == null)
            {
                return null;
            }
            return Ok(journals);
        }

        [HttpPost]
        public IActionResult Create([FromBody]PostJournalViewModel postJournalViewModel)
        {
            _journalsService.Create(postJournalViewModel);
            return Ok(postJournalViewModel);
        }

        [HttpPost]
        public IActionResult Update([FromBody]PostJournalViewModel postJournalViewModel)
        {
            _journalsService.Update(postJournalViewModel);
            return Ok(postJournalViewModel);
        }

        [HttpPost]
        public IActionResult Delete([FromBody]JournalViewModel journalViewModel)
        {
            _journalsService.Delete(journalViewModel);
            return Ok();
        }

        [HttpPost]
        public IActionResult ReadJournalsForMultiselect([FromBody]JournalViewModel journalViewModel)
        {
            return Ok(_journalsService.Read());
        }
    }
}
