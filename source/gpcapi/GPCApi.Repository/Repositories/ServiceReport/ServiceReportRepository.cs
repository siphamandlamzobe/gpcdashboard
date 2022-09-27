using System.Data;
using Dapper;
using GPCApi.Repository.DataModels;
using GPCApi.Repository.DataRepository;

namespace GPCApi.Repository;

public class ServiceReportRepository : IServiceReportRepository
{
    public DbContext _dbContext;
    private const int CommandTimeout = 30;

    public ServiceReportRepository(DbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Task<int> AddAsync(ServiceReport serviceReport)
    {
        var parameters = new DynamicParameters();
        parameters.Add("@attendance", serviceReport.Attendance);
        parameters.Add("@firsttimers", serviceReport.Firsttimers);
        parameters.Add("@serviceType", serviceReport.ServiceType);
        parameters.Add("@soulsSaved", serviceReport.SoulsSaved);
        parameters.Add("@serviceDate", serviceReport.ServiceDate);
        parameters.Add("@serviceReview", serviceReport.ServiceReview);
        parameters.Add("@createdOn", DateTime.Now);

        return _dbContext.CreateConnection().QuerySingleAsync<int>("AddServiceReport", parameters, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }

    public Task Delete(int id)
    {
        return _dbContext.CreateConnection().ExecuteAsync("DeleteServiceReport", new { id = @id }, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }

    public async Task<IEnumerable<ServiceReport>> GetAllAsync()
    {
        return await _dbContext.CreateConnection().QueryAsync<ServiceReport>("GetAllServiceReports", null, null, CommandTimeout, CommandType.StoredProcedure);
    }

    public Task<ServiceReport> GetByIdAsync(int id)
    {
        return _dbContext.CreateConnection().QuerySingleAsync<ServiceReport>("GetServiceReportById", new { id = @id }, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }

    public Task UpdateAsync(ServiceReport serviceReport)
    {
        var parameters = new DynamicParameters();
        parameters.Add("@id", serviceReport.Id);
        parameters.Add("@attendance", serviceReport.Attendance);
        parameters.Add("@firsttimers", serviceReport.Firsttimers);
        parameters.Add("@serviceType", serviceReport.ServiceType);
        parameters.Add("@soulsSaved", serviceReport.SoulsSaved);
        parameters.Add("@serviceDate", serviceReport.ServiceDate);
        parameters.Add("@serviceReview", serviceReport.ServiceReview);

        return _dbContext.CreateConnection().ExecuteAsync("UpdateServiceReport", parameters, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }
}