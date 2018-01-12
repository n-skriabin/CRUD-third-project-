using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUD.Domain
{
    [Table("Journals")]
    public class Journal : BaseEntity
    {
        public string Name { get; set; }
        public string Date { get; set; }
        public Guid? PublisherId { get; set; }
    }
}
