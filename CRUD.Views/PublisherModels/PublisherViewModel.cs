using CRUD.Domain;
using System.Collections.Generic;

namespace CRUD.Views
{
    public class PublisherViewModel : BaseEntityViewModel
    {
        public string Name { get; set; }
        public string Journals { get; set; }
        public string Books { get; set; }
        public HashSet<string> BookIds { get; set; }
        public HashSet<string> JournalIds { get; set; }

        public List<Book> BookList { get; set; }
        public List<Journal> JournalList { get; set; }
    }
}
