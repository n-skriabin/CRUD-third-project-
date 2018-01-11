using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.DataAccess.ReponseModels
{
    class JournalResponseModel : BaseResponseModel
    {
        public string Name { get; set; }
        public string Date { get; set; }
    }
}
