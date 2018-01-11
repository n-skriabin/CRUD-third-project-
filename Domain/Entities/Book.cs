using CRUD.DataAccess;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.Domain
{
    [Table("Books")]
    public class Book : BaseEntity
    {
        public string Name { get; set; }
        public string Year { get; set; }

        public List<Author> Authors { get; set; }
        public Guid? PublisherId { get; set; }
    }
}
