using GPCApi.Repository.DataModels;
using GPCApi.Repository.Repositories;

namespace GPCApi.Repository;

public interface IServiceReportRepository : IRepository
{
    Task<int> AddAsync(ServiceReport serviceReport);
    Task<ServiceReport> GetByIdAsync(int id);
    Task<IEnumerable<ServiceReport>> GetAllAsync();
    Task UpdateAsync(ServiceReport serviceReport);
    Task Delete(int id);
    Task<IEnumerable<string>> GetServiceTypeAsync();
}
