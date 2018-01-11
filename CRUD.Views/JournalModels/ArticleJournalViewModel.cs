using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.Views
{
    public class ArticleJournalViewModel : BaseEntityViewModel
    {
        public string Name { get; set; }
        public string Year { get; set; }

        public Guid? AuthorId { get; set; }
        public Guid? JournalId { get; set; }
    }
}
