using GPCApi.Repository.DataModels;

namespace GPCApi.Repository;

public interface IServiceReportRepository
{
    Task<int> AddAsync(ServiceReport serviceReport);
    Task<ServiceReport> GetByIdAsync(int id);
    Task<IEnumerable<ServiceReport>> GetAllAsync();
    Task UpdateAsync(ServiceReport serviceReport);
    Task Delete(int id);
}
