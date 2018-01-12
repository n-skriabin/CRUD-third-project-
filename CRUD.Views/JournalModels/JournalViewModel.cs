using System.Collections.Generic;

namespace CRUD.Views
{
    public class JournalViewModel : BaseEntityViewModel
    {
        public string Name { get; set; }
        public string Date { get; set; }
        public List<ArticleViewModel> Articles { get; set; }
        public List<string> ArticleIds { get; set; }
    }
}
