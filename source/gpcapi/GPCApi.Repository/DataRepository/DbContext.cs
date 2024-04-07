using System.Data;
using System.Data.SqlClient;
using Dapper;

namespace GPCApi.Repository.DataRepository;

public class DbContext : IDbContext
{
    //public IDbConnection DbConnection => new SqlConnection("Server=192.168.0.199,1433;Database=GPCDashboard;User=sa;Password=woofoodas;");127.0.0.1,1433
    public IDbConnection DbConnection => new SqlConnection("Server=127.0.0.1,1433;Database=GPCDashboard;Trusted_Connection=True;");
    public void Dispose()
    {
        DbConnection.Dispose();
    }

    public Task ExecuteAsync(string query, object? param = null, int? commandTimeout = null, CommandType? commandType = null)
    {
        return DbConnection.ExecuteAsync(query, param, null, commandTimeout, commandType);
    }

    public Task<IEnumerable<T>> QueryAsync<T>(string query, object? param = null, int? commandTimeout = null, CommandType? commandType = null)
    {
        return DbConnection.QueryAsync<T>(query, param, null, commandTimeout, commandType);
    }

    public Task<T> QuerySingleAsync<T>(string query, object? param = null, int? commandTimeout = null, CommandType? commandType = null)
    {
        return DbConnection.QuerySingleAsync<T>(query, param, null, commandTimeout, commandType);
    }

    public Task<T?> QueryFirstOrDefaultAsync<T>(string query, object? param = null, int? commandTimeout = null, CommandType? commandType = null)
    {
        return DbConnection.QueryFirstOrDefaultAsync<T>(query, param, null, commandTimeout, commandType);
    }
}
