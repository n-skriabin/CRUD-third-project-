using System.Collections.Generic;

namespace CRUD.Views
{
    public class PublisherViewModel : BaseEntityViewModel
    {
        public string Name { get; set; }
        public List<JournalViewModel> Journals { get; set; }
        public List<BookViewModel> Books { get; set; }
        public HashSet<string> BookIds { get; set; }
        public HashSet<string> JournalIds { get; set; }
    }
}
