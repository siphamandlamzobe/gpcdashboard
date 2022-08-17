using GPCApi.Repository.DataModels;

namespace GPCApi.Repository
{
    public class ServiceReportRepository : IServiceReportRepository
    {
        public Task<int> Add(ServiceReport serviceReport)
        {
            throw new NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ServiceReport>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<ServiceReport> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task Update(ServiceReport serviceReport)
        {
            throw new NotImplementedException();
        }
    }
}