using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.Domain
{
    [Table("BooksAuthors")]
    public class BooksAuthors : BaseEntity
    {
        public Guid AuthorId { get; set; }
        public Guid BookId { get; set; }
    }
}
