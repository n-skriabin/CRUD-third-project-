using CRUD.Services;
using CRUD.Views;
using CRUD.Views.ResponseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using System.Web.Http;

namespace CRUD.Web.Controllers
{
    public class PublishersController : ApiController
    {
        PublishersService publishersService;

        public PublishersController()
        {
            string connectionString = WebConfigurationManager.ConnectionStrings["ConnectionStringDB"].ConnectionString;
            publishersService = new PublishersService(connectionString);
        }

        [HttpGet]
        public List<PublisherViewModel> Read()
        {
            var publishers = publishersService.Read();
            if (publishers == null)
            {
                return null;
            }
            return publishers;
        }

        [HttpPost]
        public void Create(ResponsePublisherViewModel responsePublisherViewModel)
        {
            publishersService.Create(responsePublisherViewModel);
        }

        [HttpPost]
        public void Update(ResponsePublisherViewModel responsePublisherViewModel)
        {
            publishersService.Update(responsePublisherViewModel);
        }

        [HttpPost]
        public void Delete(PublisherViewModel publisherViewModel)
        {
            publishersService.Delete(publisherViewModel);
        }
    }
}
