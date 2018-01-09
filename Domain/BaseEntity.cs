using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.Domain
{
    public class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
        public DateTime LastUpdateDate { get; set; }

        public BaseEntity()
        {
            Id = Guid.NewGuid();
            LastUpdateDate = DateTime.UtcNow;
        }
    }
}
