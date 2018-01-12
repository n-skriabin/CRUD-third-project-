using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUD.Domain
{
    [Table("BooksAuthors")]
    public class BooksAuthors
    {
        public Guid Id { get; set; }
        public Guid AuthorId { get; set; }
        public Guid BookId { get; set; }
    }
}
