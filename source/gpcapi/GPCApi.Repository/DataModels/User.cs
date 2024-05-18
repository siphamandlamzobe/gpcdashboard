namespace GPCApi.Repository.DataModels;

public class User
{
    public byte[] Salt { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
}