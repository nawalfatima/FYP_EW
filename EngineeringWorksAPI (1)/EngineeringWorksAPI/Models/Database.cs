using System.Data;
using System.Data.Common;
using System.Data.SqlClient;

namespace EngineeringWorksAPI.Models
{
    public static class Database
    {
        private static SqlConnection connection;
        private static string connectionString = @"Data Source=DESKTOP-HS95T7N\SQLEXPRESS;Initial Catalog=EngineeringWorks;Integrated Security=SSPI;";

        public static void Connect()
        {
            connection = new SqlConnection(connectionString);
            connection.Open();
        }

        public static int ExecuteNonQuery(string query)
        {
            SqlCommand command = new SqlCommand(query, connection);
            return command.ExecuteNonQuery();
        }

        public static DataTable GetDataTable(string query)
        {
            DataAdapter adapter = new SqlDataAdapter(new SqlCommand(query, connection));
            DataSet dataSet = new DataSet();
            DataTable dataTable = new DataTable();
            adapter.Fill(dataSet);

            if (dataSet.Tables.Count > 0)
            {
                return dataSet.Tables[0];
            }
            else
            {
                return new DataTable();
            }
        }

        public static void Disconnect()
        {
            connection.Close();
        }
    }
}
