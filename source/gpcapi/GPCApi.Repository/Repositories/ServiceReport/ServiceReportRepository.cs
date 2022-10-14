using System.Data;
using Dapper;
using GPCApi.Repository.DataModels;
using GPCApi.Repository.DataRepository;

namespace GPCApi.Repository;

public class ServiceReportRepository : IServiceReportRepository
{
    private const int CommandTimeout = 30;

    public IDbContext DbContext { get; init; }

    public ServiceReportRepository(IDbContext dbContext)
    {
        DbContext = dbContext;
    }

    public Task<int> AddAsync(ServiceReport serviceReport)
    {
        var parameters = new DynamicParameters();
        parameters.Add("@attendance", serviceReport.Attendance);
        parameters.Add("@firsttimers", serviceReport.Firsttimers);
        parameters.Add("@serviceTypeId", serviceReport.ServiceTypeId);
        parameters.Add("@soulsSaved", serviceReport.SoulsSaved);
        parameters.Add("@serviceDate", serviceReport.ServiceDate);
        parameters.Add("@serviceReview", serviceReport.ServiceReview);

        return DbContext.QuerySingleAsync<int>("AddServiceReport", parameters, CommandTimeout, CommandType.StoredProcedure);
    }

    public Task Delete(int id)
    {
        return DbContext.ExecuteAsync("DeleteServiceReport", new { id = @id }, CommandTimeout, CommandType.StoredProcedure);
    }

    public Task<IEnumerable<ServiceReport>> GetAllAsync()
    {
        return DbContext.QueryAsync<ServiceReport>("GetAllServiceReports", null, CommandTimeout, CommandType.StoredProcedure);
    }

    public Task<ServiceReport> GetByIdAsync(int id)
    {
        return DbContext.QuerySingleAsync<ServiceReport>("GetServiceReportById", new { id = @id }, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
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

        return DbContext.ExecuteAsync("UpdateServiceReport", parameters, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }

    public Task<IEnumerable<LUTServiceType>> GetServiceTypeAsync()
    {
        var query = "SELECT Id, ServiceType FROM LUTServiceType";

        return DbContext.QueryAsync<LUTServiceType>(query, null, CommandTimeout, CommandType.Text);
    }
}