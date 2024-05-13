using System.Security.Cryptography;
using System.Text;
using GPCApi.Repository.Repositories.Users;

namespace GPCApi.Service.Users;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    const int KeySize = 64;
    const int Iterations = 350000;
    readonly HashAlgorithmName hashAlgorithm = HashAlgorithmName.SHA512;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    
    public bool CreateUser(string email, string password)
    {
        if (_userRepository.UserExists(email))
        {
            return false;
        }
        
        var passwordHash = HashPassword(password, out var salt);
        
        return _userRepository.CreateUser(email, passwordHash, salt);
    }
    
    public bool AuthenticateUser(string email, string password)
    {
        var user = _userRepository.GetUserByEmail(email);

        if (user == null)
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
            hashAlgorithm,
            KeySize);
        return Convert.ToHexString(hash);
    }
    
    private bool VerifyPassword(string password, string hash, byte[] salt)
    {
        var hashToCompare = Rfc2898DeriveBytes.Pbkdf2(password, salt, Iterations, hashAlgorithm, KeySize);

        return CryptographicOperations.FixedTimeEquals(hashToCompare, Convert.FromHexString(hash));
    }
}