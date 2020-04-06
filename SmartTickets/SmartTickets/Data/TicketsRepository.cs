using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using SmartTickets.Models;

namespace SmartTickets.Data
{
    public class TicketsRepository
    {
        private readonly string conexionSQL;

        public TicketsRepository(IConfiguration configuration)
        {
            conexionSQL = configuration.GetConnectionString("SMARTTICKET");
        }

        //Se da de alta un incidente nuevo
        public async Task<Incidente> AltaIncidente(Incidente incidente)
        {
            var jDatos = JsonConvert.SerializeObject(incidente);
            using (SqlConnection connection = new SqlConnection(conexionSQL))
            {
                using (SqlCommand cmd = new SqlCommand("TSP_Tickets", connection))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@Opcion", 1));
                    cmd.Parameters.Add(new SqlParameter("@jTicket", jDatos));
                    var response = new Incidente();
                    await connection.OpenAsync();
                    using (SqlDataReader reader = await cmd.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            response = MapToIncidente(reader);
                        }
                    }
                    return response;
                }
            }
            //await GeneralesRepository.EjecutaSpSinRetornoAsync(conexionDB, "TSP_GuardarTicket", incidente.Titulo, incidente.UsuarioAsig, incidente.Id_Usuario, incidente.Id_Estatus, incidente.Tipo, incidente.Prioridad);
        }

        private Incidente MapToIncidente(SqlDataReader reader)
        {
            return new Incidente
            {
                Folio = (int)reader["Folio"],
                Compania = (byte)reader["Compania"],
                Sucursal = (int)reader["Sucursal"],
                Titulo = reader["Titulo"].ToString(),
                Tipo_Ticket = reader["Tipo_Ticket"].ToString(),
                Usuario_Asig = reader["Usuario_Asig"].ToString(),
                Id_Usuario = (int)reader["Id_Usuario"],
                Id_Estatus = (int)reader["Id_Estatus"],
                Id_Fecha = (DateTime)reader["Id_Fecha"],
                Descripcion = reader["Descripcion"].ToString(),
                Categoria = reader["Categoria"].ToString(),
                Subcategoria = reader["Subcategoria"].ToString(),
                Departamento = reader["Departamento"].ToString(),
                Fecha_cierre = (DateTime)reader["Fecha_cierre"],
                Prioridad = reader["Prioridad"].ToString()
            };
        }  

    }
}
