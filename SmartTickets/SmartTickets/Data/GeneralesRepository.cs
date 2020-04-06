using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using SmartTickets.Models;

namespace SmartTickets.Data
{
    public class GeneralesRepository
    {
        private readonly string conexionSQL;

        public GeneralesRepository(IConfiguration configuration)
        {
            conexionSQL = configuration.GetConnectionString("TIENDA");
        }        

        //SE OBTIENE UNA O TODAS LAS SUCURSALES ACTIVAS(PASANDO COMO VALOR 000 A LA VARIABLE SUCURSAL)
        public async Task<List<Sucursal>> GetSucursales(byte compania, string sucursal)
        {
            using (SqlConnection connection = new SqlConnection(conexionSQL))
            {
                using (SqlCommand cmd = new SqlCommand("TSP_CatalogosCorpo", connection))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@Opcion", 1));
                    cmd.Parameters.Add(new SqlParameter("@vCompania", compania));
                    cmd.Parameters.Add(new SqlParameter("@vSucursal", sucursal));
                    var response = new List<Sucursal>();
                    await connection.OpenAsync();
                    using (SqlDataReader reader = await cmd.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            response.Add(MapToSucursal(reader));
                        }
                    }
                    return response;
                }
            }
        }

        private Sucursal MapToSucursal(SqlDataReader reader)
        {
            return new Sucursal
            {
                Clave = (short)reader["SUCURSAL"],
                Nombre = reader["NOMBRE"].ToString()
            };
        }
    }
}
