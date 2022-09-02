using GPCApi.Repository.DataModels;

namespace GPCApi.Repository;

public interface IServiceReportRepository
{
    Task<int> Add(ServiceReport serviceReport);
    Task<ServiceReport> GetById(int id);
    Task<IEnumerable<ServiceReport>> GetAll();
    Task Update(ServiceReport serviceReport);
    Task Delete(int id);
    Task<IEnumerable<ServiceReport>> Search(string query);
}
