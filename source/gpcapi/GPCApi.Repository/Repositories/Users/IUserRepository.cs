using GPCApi.Repository.DataModels;

namespace GPCApi.Repository.Repositories.Users;

public interface IUserRepository : IRepository
{
    bool CreateUser(string email, string passwordHash, byte[] salt);
    bool UserExists(string email);
    User GetUserByEmail(string email);
}