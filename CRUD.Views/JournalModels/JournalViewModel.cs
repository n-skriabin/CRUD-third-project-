using CRUD.Domain;
using System.Collections.Generic;

namespace CRUD.Views
{
    public class JournalViewModel : BaseEntityViewModel
    {
        public string Name { get; set; }
        public string Date { get; set; }
        public string Articles { get; set; }
        public HashSet<string> ArticleIds { get; set; }
        public List<Article> ArticlesList { get; set; }
    }
}
