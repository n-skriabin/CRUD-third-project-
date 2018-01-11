using CRUD.DataAccess;
using System;
using System.Collections.Generic;
using CRUD.DataAccess.Repositories;
using CRUD.Views;

namespace CRUD.Services
{
    public class AuthorsService
    {
        private AuthorRepository _authorRepository;

        public AuthorsService(string connectionString)
        {
            _authorRepository = new AuthorRepository(connectionString);
        }

        public List<Author> GetAll()
        {
            var authors = _authorRepository.GetAll();
            return authors;
        }

        public void Create(AuthorViewModel authorViewModel)
        {
            Author author = new Author
            {
                FirstName = authorViewModel.FirstName,
                LastName = authorViewModel.LastName,
                Patronymic = authorViewModel.Patronymic,
                Abbreviated = GenerateAbbreviated(authorViewModel)
            };
            authorViewModel.Id = author.Id.ToString();
            _authorRepository.Create(author);
        }

        public void Update(AuthorViewModel authorViewModel)
        {
            Author newRecord = new Author
            {
                Id = Guid.Parse(authorViewModel.Id),
                FirstName = authorViewModel.FirstName,
                LastName = authorViewModel.LastName,
                Patronymic = authorViewModel.Patronymic,
                Abbreviated = GenerateAbbreviated(authorViewModel)
            };
            _authorRepository.Update(newRecord);
        }

        public void Delete(Guid id)
        {
            _authorRepository.Delete(id);
        }

        public string GenerateAbbreviated(AuthorViewModel authorViewModel)
        {
            string abbreviated = String.Empty;

            if (authorViewModel.Patronymic != null)
            {
                abbreviated = authorViewModel.FirstName[0] + "." + authorViewModel.Patronymic[0] + ". " + authorViewModel.LastName;
                return abbreviated;
            }
            abbreviated = authorViewModel.FirstName[0] + ". " + authorViewModel.LastName;

            return abbreviated;
        }
    }
}
