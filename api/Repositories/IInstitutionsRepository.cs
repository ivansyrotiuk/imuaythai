﻿using MuaythaiSportManagementSystemApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MuaythaiSportManagementSystemApi.Repositories
{
    public interface IInstitutionsRepository
    {
        Task<Institution> Get(int id);
        Task<List<Institution>> GetAll();
        Task<List<Institution>> Find(Func<Institution, bool> predicate);
        void Save(Institution institution);
        void Remove(int id);
    }
}
