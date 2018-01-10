using System.Collections.Generic;

namespace CRUD.Views
{
    public class PostJournalViewModel : BaseEntityViewModel
    {
        public string Name { get; set; }
        public string Date { get; set; }
        public List<string> ArticleIds { get; set; }
    }
}
