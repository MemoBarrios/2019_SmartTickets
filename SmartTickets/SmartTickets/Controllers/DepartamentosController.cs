using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmartTickets.Data;
using SmartTickets.Models;

namespace SmartTickets.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class DepartamentosController : ControllerBase
    {
        private readonly DepartamentosRepository departamentosRepository;

        public DepartamentosController(DepartamentosRepository _departamentosRepository)
        {
            departamentosRepository = _departamentosRepository ?? throw new ArgumentNullException(nameof(_departamentosRepository));
        }

        [HttpGet("{action}")]
        public async Task<IEnumerable<Departamento>> GetDepartamentos()
        {
            return await departamentosRepository.GetDepartamentos();
        }
    }
}