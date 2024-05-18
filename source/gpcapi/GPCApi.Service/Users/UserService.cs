using System.Security.Cryptography;
using System.Text;
using GPCApi.Repository.Repositories.Users;
using GPCApi.Service.Dto;

namespace GPCApi.Service.Users;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    const int KeySize = 64;
    const int Iterations = 350000;
    readonly HashAlgorithmName _hashAlgorithm = HashAlgorithmName.SHA512;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    
    public async Task<bool> CreateUser(RegisterUser registerUser)
    {
        if (await _userRepository.UserExists(registerUser.Email))
        {
            return false;
        }
        
        var passwordHash = HashPassword(registerUser.Password, out var salt);
        
        return await _userRepository.CreateUser(registerUser.Email, passwordHash, salt);
    }
    
    public async Task<bool> AuthenticateUser(string email, string password)
    {
        var user = await _userRepository.GetUserByEmail(email);

        if (user.Equals(null))
        {
            return false;
        }
        
        var hashPassword = HashPassword(password, out var salt);
        return VerifyPassword(password, hashPassword, salt);
    }
    
    private string HashPassword(string password, out byte[] salt)
    {
        salt = RandomNumberGenerator.GetBytes(KeySize);
        var hash = Rfc2898DeriveBytes.Pbkdf2(
            Encoding.UTF8.GetBytes(password),
            salt,
            Iterations,
            _hashAlgorithm,
            KeySize);
        return Convert.ToHexString(hash);
    }
    
    private bool VerifyPassword(string password, string hash, byte[] salt)
    {
        var hashToCompare = Rfc2898DeriveBytes.Pbkdf2(password, salt, Iterations, _hashAlgorithm, KeySize);

        return CryptographicOperations.FixedTimeEquals(hashToCompare, Convert.FromHexString(hash));
    }
}