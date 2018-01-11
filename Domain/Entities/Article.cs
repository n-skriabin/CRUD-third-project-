using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUD.Domain
{
    [Table("Articles")]
    public class Article : BaseEntity
    {
        [StringLength(50)]
        public string Name { get; set; }
        [StringLength(50)]
        public string Year { get; set; }

        public Guid? AuthorId { get; set; }
        [ForeignKey("AuthorId")]
        public virtual Author Author { get; set; }
        public Guid? JournalId { get; set; }
    }
}
