using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.Views
{
    public class BaseEntityViewModel
    {
        public string Id { get; set; }

        public string GetId()
        {
            return Guid.NewGuid().ToString();
        }
    }
}
