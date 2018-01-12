namespace CRUD.Views
{
    public class ArticleViewModel : BaseEntityViewModel
    {       
        public string Name { get; set; }      
        public string Year { get; set; }       
        public string AuthorId { get; set; }
        public AuthorViewModel Author { get; set; } 
        public string Abbreviated { get; set; }
    }
}
