using Microsoft.AspNetCore.Mvc;
using CRUD.Services;
using CRUD.Views;
using Microsoft.Extensions.Configuration;
using CRUD.Web.Core.Controllers;

namespace CRUD.Web.Controllers
{
    public class JournalsController : BaseController
    {
        private JournalsService _journalsService;

        public JournalsController(IConfiguration configuration) : base(configuration)
        {
            _journalsService = new JournalsService(ConnectionString);
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
