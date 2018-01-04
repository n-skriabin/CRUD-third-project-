﻿using CRUD.DataAccess;
using System;
using System.Collections.Generic;
using CRUD.DataAccess.Repositories;
using CRUD.Views;

namespace CRUD.Services
{
    public class AuthorsService
    {
        private AuthorRepository _authorRepository;

        public AuthorsService(string ConnectionString)
        {
            _authorRepository = new AuthorRepository(ConnectionString);
        }

        public List<Author> Read()
        {
            return _authorRepository.Read();
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

        public void Delete(Guid Id)
        {
            _authorRepository.Delete(Id);
        }

        public string GenerateAbbreviated(AuthorViewModel authorViewModel)
        {
            string abbreviated = "";

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
