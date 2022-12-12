using System.Data;

namespace GPCApi.Repository.DataRepository;

public interface IDbContext : IDisposable
{
    IDbConnection DbConnection { get; }

    Task ExecuteAsync(string query, object? param = null, int? commandTimeout = null, CommandType? commandType = null);

    Task<IEnumerable<T>> QueryAsync<T>(string query, object? param = null, int? commandTimeout = null, CommandType ? commandType = null);

    Task<T> QuerySingleAsync<T>(string query, object? param = null, int? commandTimeout = null, CommandType? commandType = null);
    Task<T> QueryFirstOrDefaultAsync<T>(string query, object? param = null, int? commandTimeout = null, CommandType? commandType = null);
}
