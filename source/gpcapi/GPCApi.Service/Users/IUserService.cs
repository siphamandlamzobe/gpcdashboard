using GPCApi.Service.Dto;

namespace GPCApi.Service.Users;

public interface IUserService
{
    Task<bool> CreateUser(RegisterUser registerUser);
    Task<bool> AuthenticateUser(string email, string password);
}