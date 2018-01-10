using System.Collections.Generic;

namespace CRUD.Views.ResponseModels
{
    public class PostBookViewModel : BaseEntityViewModel
    {
        public string Name { get; set; }
        public string Year { get; set; }
        public List<string> AuthorIds { get; set; }
    }
}
