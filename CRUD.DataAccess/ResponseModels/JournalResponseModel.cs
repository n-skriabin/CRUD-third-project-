using CRUD.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.DataAccess.ReponseModels
{
    public class JournalResponseModel : BaseResponseModel
    {
        public string Name { get; set; }
        public string Date { get; set; }
        public List<Article> Articles { get; set; }
    }
}
