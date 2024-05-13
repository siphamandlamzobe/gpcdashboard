using GPCApi.Repository.DataModels;
using GPCApi.Repository.DataRepository;

namespace GPCApi.Repository.Repositories.Users;

public class UserRepository : IUserRepository
{
    public bool CreateUser(string email, string passwordHash, byte[] salt)
    {
        throw new NotImplementedException();
    }

    public bool UserExists(string email)
    {
        throw new NotImplementedException();
    }

    public User GetUserByEmail(string email)
    {
        throw new NotImplementedException();
    }

    public IDbContext DbContext { get; init; }
}