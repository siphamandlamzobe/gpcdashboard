using GPCApi.Repository.DataRepository;

namespace GPCApi.Repository.Repositories;

public interface IRepository
{
    public IDbContext DbContext { get; init; }
}
