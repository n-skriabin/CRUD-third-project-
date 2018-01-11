using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.Domain
{
    [Table("Journals")]
    public class Journal : BaseEntity
    {
        public string Name { get; set; }
        public string Date { get; set; }
        public List<Article> Articles { get; set; }
        public Guid? PublisherId { get; set; }
    }
}
