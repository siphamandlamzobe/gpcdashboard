namespace GPCApi.Service.Auth;

public interface IAuthenticationService
{
    string GenerateJwtToken(string email);
}