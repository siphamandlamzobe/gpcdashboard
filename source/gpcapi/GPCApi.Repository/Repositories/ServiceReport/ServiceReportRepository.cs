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
        var parameters = new DynamicParameters();
        parameters.Add("@attendance", serviceReport.Attendance);
        parameters.Add("@firsttimers", serviceReport.Firsttimers);
        parameters.Add("@serviceType", serviceReport.ServiceType);
        parameters.Add("@soulsSaved", serviceReport.SoulsSaved);
        parameters.Add("@serviceDate", serviceReport.ServiceDate);
        parameters.Add("@serviceReview", serviceReport.ServiceReview);
        parameters.Add("@createdOn", DateTime.Now);

        return _dbConnection.QuerySingleAsync<int>("AddServiceReport", parameters, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }

    public Task Delete(int id)
    {
        var parameter = new DynamicParameters();
        parameter.Add("@id", id);
        return _dbConnection.ExecuteAsync("DeleteServiceReport", parameter, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }

    public Task<IEnumerable<ServiceReport>> GetAll()
    {
        return _dbConnection.QueryAsync<ServiceReport>("GetAllServiceReports", null, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }

    public Task<ServiceReport> GetById(int id)
    {
        var parameter = new DynamicParameters();
        parameter.Add("@id", id);
        return _dbConnection.QuerySingleAsync<ServiceReport>("GetServiceReportById", parameter, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }

    public Task<IEnumerable<ServiceReport>> Search(string query)
    {
        var parameter = new DynamicParameters();
        parameter.Add("@query", query);
        return _dbConnection.QueryAsync<ServiceReport>("SearchServiceReports", parameter, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }

    public Task Update(ServiceReport serviceReport)
    {
        var parameters = new DynamicParameters();
        parameters.Add("@id", serviceReport.Id);
        parameters.Add("@attendance", serviceReport.Attendance);
        parameters.Add("@firsttimers", serviceReport.Firsttimers);
        parameters.Add("@serviceType", serviceReport.ServiceType);
        parameters.Add("@soulsSaved", serviceReport.SoulsSaved);
        parameters.Add("@serviceDate", serviceReport.ServiceDate);
        parameters.Add("@serviceReview", serviceReport.ServiceReview);

        return _dbConnection.ExecuteAsync("UpdateServiceReport", parameters, null, commandTimeout: CommandTimeout, commandType: CommandType.StoredProcedure);
    }
}