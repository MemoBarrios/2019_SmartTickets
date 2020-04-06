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
    public class CategoriasController : ControllerBase
    {
        private readonly CategoriasRepository categoriasRepository;

        public CategoriasController(CategoriasRepository _categoriasRepository)
        {
            categoriasRepository = _categoriasRepository ?? throw new ArgumentNullException(nameof(_categoriasRepository));
        }

        [HttpGet("{action}/{departamento}")]
        public async Task<IEnumerable<Categoria>> GetCategorias(string departamento)
        {
            return await categoriasRepository.GetCategoriasXDep(departamento);
        }

        [HttpGet("{action}/{categoria}")]
        public async Task<IEnumerable<Subcategoria>> GetSubcategorias(string categoria)
        {
            return await categoriasRepository.GetSubcategoriasXCat(categoria);
        }
    }
}