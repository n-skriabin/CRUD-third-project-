using System.Collections.Generic;

namespace CRUD.Views.ResponseModels
{
    public class PostPublisherViewModel : BaseEntityViewModel
    {
        public string Name { get; set; }
        public List<string> BookIds { get; set; }
        public List<string> JournalIds { get; set; }
    }
}
