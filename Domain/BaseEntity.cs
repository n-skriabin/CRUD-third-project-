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
        public DateTime DateTime { get; set; }

        public BaseEntity()
        {
            Id = Guid.NewGuid();
            DateTime = DateTime.UtcNow;
        }

        //public Guid GetId()
        //{
        //    Id = Guid.NewGuid();
        //    return Id;
        //}

        //public DateTime GetDateTime()
        //{
        //    var date = DateTime.UtcNow;
        //    return date;
        //}
    }
}
