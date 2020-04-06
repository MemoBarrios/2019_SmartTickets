using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using SmartTickets.Models;

namespace SmartTickets.Data
{
    public class DepartamentosRepository
    {
        private readonly string conexionSQL;

        public DepartamentosRepository(IConfiguration configuration)
        {
            conexionSQL = configuration.GetConnectionString("SMARTTICKET");
        }

        //SE OBTIENEN TODOS LOS DEPARTAMENTOS
        public async Task<List<Departamento>> GetDepartamentos()
        {
            using (SqlConnection connection = new SqlConnection(conexionSQL))
            {
                using (SqlCommand cmd = new SqlCommand("TSP_Departamentos", connection))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@Opcion", 1));
                    cmd.Parameters.Add(new SqlParameter("@jDatos", ""));
                    var response = new List<Departamento>();
                    await connection.OpenAsync();
                    using (SqlDataReader reader = await cmd.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            response.Add(MapToDepartamento(reader));
                        }
                    }
                    return response;
                }
            }
        }

        private Departamento MapToDepartamento(SqlDataReader reader)
        {
            return new Departamento
            {
                Id = (int)reader["Id"],
                Clave = reader["Clave"].ToString(),
                Nombre = reader["Nombre"].ToString(),
                Id_Usuario = (int)reader["Id_Usuario"],
                Id_Fecha = (DateTime)reader["Id_Fecha"]
            };
        }
    }
}
