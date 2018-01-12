using System;
using CRUD.Domain;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.DataAccess.ReponseModels
{
    public class PublisherResponseModel : BaseResponseModel
    {
        public string Name { get; set; }
        public HashSet<Book> Books { get; set; }
        public HashSet<Journal> Journals { get; set; }
    }
}
