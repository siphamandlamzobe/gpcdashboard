namespace GPCApi.Service.Users;

public interface IUserService
{
    Task<bool> CreateUser(string email, string password);
    Task<bool> AuthenticateUser(string email, string password);
}