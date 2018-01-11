using CRUD.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUD.DataAccess
{
    public class Context : DbContext
    {
        public Context(string ConnectionString)
            : base(ConnectionString)
        {
            Configuration.LazyLoadingEnabled = false;
        } 

        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Journal> Journals { get; set; }
        public DbSet<Publisher> Publishers { get; set; }
        public DbSet<BooksAuthors> BooksAuthors { get; set; }
    }
}
