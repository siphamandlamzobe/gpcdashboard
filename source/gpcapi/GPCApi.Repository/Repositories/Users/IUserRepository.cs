using GPCApi.Repository.DataModels;

namespace GPCApi.Repository.Repositories.Users;

public interface IUserRepository : IRepository
{
    Task<bool> CreateUser(string email, string passwordHash, byte[] salt);
    Task<bool> UserExists(string email);
    Task<User> GetUserByEmail(string email);
}