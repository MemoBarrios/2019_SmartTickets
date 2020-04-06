using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartTickets.Models
{
    public class Subcategoria
    {
        public string Clave { get; set; }
        public string Nombre { get; set; }
        public string Id_Categoria { get; set; }
        public int Id_Usuario { get; set; }
        public DateTime Id_Fecha { get; set; }
    }
}
