using System.Data;
using System.Data.SqlClient;

namespace GPCApi.Repository.DataRepository;

public class DbContext
{
    public IDbConnection CreateConnection()
        => new SqlConnection(Environment.GetEnvironmentVariable("GPCDashboardConnection"));
}
