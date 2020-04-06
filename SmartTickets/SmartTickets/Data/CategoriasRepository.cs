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
    public class CategoriasRepository
    {
        private readonly string conexionSQL;

        public CategoriasRepository(IConfiguration configuration)
        {
            conexionSQL = configuration.GetConnectionString("SMARTTICKET");
        }

        //Se obtiene la categoria segun el departamento que se pasa como parametro
        public async Task<List<Categoria>> GetCategoriasXDep(string departamento)
        {

            //var jDatos = JsonConvert.SerializeObject(departamento);
            Departamento depto = new Departamento
            {
                Clave = departamento
            };
            var jDatos = JsonConvert.SerializeObject(depto);
            using (SqlConnection connection = new SqlConnection(conexionSQL))
            {
                using (SqlCommand cmd = new SqlCommand("TSP_Categorias", connection))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@Opcion", 1));
                    cmd.Parameters.Add(new SqlParameter("@jDatos", jDatos));
                    var response = new List<Categoria>();
                    await connection.OpenAsync();
                    using (SqlDataReader reader = await cmd.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            response.Add(MapToCategoria(reader));
                        }
                    }
                    return response;
                }
            }
        }

        //Se obtiene la categoria segun el departamento que se pasa como parametro
        public async Task<List<Subcategoria>> GetSubcategoriasXCat(string categoria)
        {

            //var jDatos = JsonConvert.SerializeObject(departamento);
            Categoria catego = new Categoria
            {
                Clave = categoria
            };
            var jDatos = JsonConvert.SerializeObject(catego);
            using (SqlConnection connection = new SqlConnection(conexionSQL))
            {
                using (SqlCommand cmd = new SqlCommand("TSP_Categorias", connection))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@Opcion", 2));
                    cmd.Parameters.Add(new SqlParameter("@jDatos", jDatos));
                    var response = new List<Subcategoria>();
                    await connection.OpenAsync();
                    using (SqlDataReader reader = await cmd.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            response.Add(MapToSubcategoria(reader));
                        }
                    }
                    return response;
                }
            }
        }

        private Categoria MapToCategoria(SqlDataReader reader)
        {
            return new Categoria
            {
                Clave = reader["Clave"].ToString(),
                Nombre = reader["Nombre"].ToString(),
                Id_Departamento = reader["Id_Departamento"].ToString(),
                Id_Usuario = (int)reader["Id_Usuario"],
                Id_Fecha = (DateTime)reader["Id_Fecha"]
            };
        }

        private Subcategoria MapToSubcategoria(SqlDataReader reader)
        {
            return new Subcategoria
            {
                Clave = reader["Clave"].ToString(),
                Nombre = reader["Nombre"].ToString(),
                Id_Categoria = reader["Id_Categoria"].ToString(),
                Id_Usuario = (int)reader["Id_Usuario"],
                Id_Fecha = (DateTime)reader["Id_Fecha"]
            };
        }
    }
}
