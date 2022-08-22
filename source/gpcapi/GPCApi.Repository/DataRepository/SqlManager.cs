
using System.Data;
using System.Data.SqlClient;

namespace GPCApi.Repository
{
    public class SqlManager : ISqlManager
    {
        public IDbConnection DbConnection { get => new SqlConnection(Environment.GetEnvironmentVariable("GPCDashboardConnection") ?? throw new Exception("Cannot find environment variable GPCDashboardConnection!")); set => throw new NotImplementedException(); }
    }
}