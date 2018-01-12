using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUD.Domain
{
    [Table("Books")]
    public class Book : BaseEntity
    {
        public string Name { get; set; }
        public string Year { get; set; }
        public Guid? PublisherId { get; set; }
    }
}
