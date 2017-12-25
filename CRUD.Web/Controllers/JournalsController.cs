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
    public class JournalsController : ApiController
    {
        JournalsService journalsService;

        public JournalsController()
        {
            string connectionString = WebConfigurationManager.ConnectionStrings["ConnectionStringDB"].ConnectionString;
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
        public void Create(ResponseJournalViewModel responseJournalViewModel)
        {
            journalsService.Create(responseJournalViewModel);
        }

        [HttpPost]
        public void Update(ResponseJournalViewModel responseJournalViewModel)
        {
            journalsService.Update(responseJournalViewModel);
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
