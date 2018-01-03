using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.Views.ResponseModels
{
    public class PostPublisherViewModel : BaseEntityViewModel
    {
        public string Name { get; set; }
        public List<string> BookIds { get; set; }
        public List<string> JournalIds { get; set; }
    }
}
