using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.Views.ResponseModels
{
    public class PostBookViewModel : BaseEntityViewModel
    {
        public string Name { get; set; }
        public string Year { get; set; }
        public List<string> AuthorIds { get; set; }
    }
}
