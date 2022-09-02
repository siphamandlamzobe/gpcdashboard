using System.Data;
using Dapper;
using GPCApi.Repository.DataModels;

namespace GPCApi.Repository;

public class ServiceReportRepository : IServiceReportRepository
{
    public IDbConnection _dbConnection;
    private const int CommandTimeout = 30;

    public ServiceReportRepository(IDbConnection dbConnection)
    {
        _dbConnection = dbConnection;
    }

    public Task<int> Add(ServiceReport serviceReport)
    {
        return _dbConnection.QuerySingleAsync<int>("AddServiceReport", serviceReport, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }

    public Task Delete(int id)
    {
        return _dbConnection.ExecuteAsync("DeleteServiceReport", new { id = @id }, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }

    public async Task<IEnumerable<ServiceReport>> GetAll()
    {
        return await _dbConnection.QueryAsync<ServiceReport>("GetAllServiceReports", null, null, CommandTimeout, CommandType.StoredProcedure);
    }

    public Task<ServiceReport> GetById(int id)
    {
        return _dbConnection.QuerySingleAsync<ServiceReport>("GetServiceReportById", new { id = @id }, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }

    public Task Update(ServiceReport serviceReport)
    {
        return _dbConnection.ExecuteAsync("UpdateServiceReport", serviceReport, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }
}