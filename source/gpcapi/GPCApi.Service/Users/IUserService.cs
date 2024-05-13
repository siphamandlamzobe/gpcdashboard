namespace GPCApi.Service.Users;

public interface IUserService
{
    bool CreateUser(string email, string password);
    bool AuthenticateUser(string email, string password);
}