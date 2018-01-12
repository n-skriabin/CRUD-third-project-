namespace CRUD.Views
{
    public class AuthorViewModel : BaseEntityViewModel
    {       
        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public string Patronymic { get; set; }

        public string Abbreviated { get; set; }
    }
}
