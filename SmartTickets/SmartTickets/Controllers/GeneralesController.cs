using System;
using System.Collections.Generic;
using System.Data;
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
    public class GeneralesController : ControllerBase
    {
        private readonly GeneralesRepository generalesRepository;

        public GeneralesController(GeneralesRepository _generalesRepository)
        {
            this.generalesRepository = _generalesRepository ?? throw new ArgumentNullException(nameof(_generalesRepository));
        }

        [HttpGet("{action}/{compania}/{sucursal}")]
        public async Task<IEnumerable<Sucursal>> GetSucursales(byte compania, string sucursal)
        {
            return await generalesRepository.GetSucursales(compania, sucursal);
        }
    }
}
