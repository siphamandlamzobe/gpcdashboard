using System.Data;
using Dapper;
using GPCApi.Repository.DataModels;

namespace GPCApi.Repository
{
    public class ServiceReportRepository : IServiceReportRepository
    {
        private ISqlManager _sqlManager;
        public ServiceReportRepository(ISqlManager sqlManager)
        {
            _sqlManager = sqlManager;
        }

        public async Task<int> Add(ServiceReport serviceReport)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@attendance", serviceReport.Attendance);
            parameters.Add("@firsttimers", serviceReport.Firsttimers);
            parameters.Add("@serviceType", serviceReport.ServiceType);
            parameters.Add("@soulsSaved", serviceReport.SoulsSaved);
            parameters.Add("@serviceDate", serviceReport.ServiceDate);
            parameters.Add("@serviceReview", serviceReport.ServiceReview);
            parameters.Add("@createdOn", DateTime.Now);

            return await _sqlManager.DbConnection.QuerySingleAsync<int>("AddServiceReport", parameters, null, 120, CommandType.StoredProcedure);
        }

        public async Task Delete(int id)
        {
            var parameter = new DynamicParameters();
            parameter.Add("@id", id);
            await _sqlManager.DbConnection.ExecuteAsync("DeleteServiceReport", parameter, null, 120, CommandType.StoredProcedure);
        }

        public async Task<IEnumerable<ServiceReport>> GetAll()
        {
            object? param = null;
            return await _sqlManager.DbConnection.QueryAsync<ServiceReport>("GetAllServiceReports", param, null, 120, CommandType.StoredProcedure);
        }

        public async Task<ServiceReport> GetById(int id)
        {
            var parameter = new DynamicParameters();
            parameter.Add("@id", id);
            return await _sqlManager.DbConnection.QuerySingleAsync<ServiceReport>("GetServiceReportById", parameter, null, 120, CommandType.StoredProcedure);
        }

        public async Task Update(ServiceReport serviceReport)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@id", serviceReport.Id);
            parameters.Add("@attendance", serviceReport.Attendance);
            parameters.Add("@firsttimers", serviceReport.Firsttimers);
            parameters.Add("@serviceType", serviceReport.ServiceType);
            parameters.Add("@soulsSaved", serviceReport.SoulsSaved);
            parameters.Add("@serviceDate", serviceReport.ServiceDate);
            parameters.Add("@serviceReview", serviceReport.ServiceReview);

            await _sqlManager.DbConnection.ExecuteAsync("UpdateServiceReport", parameters, null, 120, CommandType.StoredProcedure);
        }
    }
}