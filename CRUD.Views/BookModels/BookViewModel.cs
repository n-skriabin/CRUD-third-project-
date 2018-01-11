using System.Collections.Generic;

namespace CRUD.Views
{
    public class BookViewModel : BaseEntityViewModel
    {
        public string Name { get; set; }
        public string Year { get; set; }
        public string Author { get; set; }
        public List<string> AuthorIds { get; set; }
    }
}
