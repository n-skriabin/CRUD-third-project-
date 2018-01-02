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
    public class JournalsController : Controller
    {
        JournalsService journalsService;
        private readonly IConfiguration _configuration;

        public JournalsController(IConfiguration configuration)
        {
            _configuration = configuration;
            string connectionString = _configuration.GetConnectionString("DefaultConnection");
            journalsService = new JournalsService(connectionString);
        }

        [HttpGet]
        public List<JournalViewModel> Read()
        {
            var journals = journalsService.Read();
            if (journals == null)
            {
                return null;
            }
            return journals;
        }

        [HttpPost]
        public void Create(PostJournalViewModel postJournalViewModel)
        {
            journalsService.Create(postJournalViewModel);
        }

        [HttpPost]
        public void Update(PostJournalViewModel postJournalViewModel)
        {
            journalsService.Update(postJournalViewModel);
        }

        [HttpPost]
        public void Delete(JournalViewModel journalViewModel)
        {
            journalsService.Delete(journalViewModel);
        }

        [HttpPost]
        public List<JournalViewModel> ReadJournalsForMultiselect(JournalViewModel journalViewModel)
        {
            return journalsService.Read();
        }
    }
}
