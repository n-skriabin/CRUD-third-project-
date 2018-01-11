using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUD.Domain
{
    [Table("Articles")]
    public class Article : BaseEntity
    {
        public string Name { get; set; }
        public string Year { get; set; }

        public Guid? AuthorId { get; set; }
        [ForeignKey("AuthorId")]
        public virtual Author Author { get; set; }
        public Guid? JournalId { get; set; }
    }
}
