using Dapper;
using System.Data;
using System.Data.SqlClient;

namespace GPCApi.Repository.DataRepository;

public class DbContext : IDbContext
{
    public IDbConnection DbConnection => new SqlConnection(Environment.GetEnvironmentVariable("GPCDashboardConnection"));

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
}
