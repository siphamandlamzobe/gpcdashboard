namespace GPCApi.Repository.DataModels;

public class User
{
    public string Salt { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
}