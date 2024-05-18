using System.Data;
using Dapper;
using GPCApi.Repository.DataModels;
using GPCApi.Repository.DataRepository;

namespace GPCApi.Repository.Repositories.Users;

public class UserRepository : IUserRepository
{
    private const int CommandTimeout = 30;
    public IDbContext DbContext { get; init; }
    public UserRepository(IDbContext dbContext)
    {
        DbContext = dbContext;
    }
    public Task<bool> CreateUser(string email, string passwordHash, byte[] salt)
    {
        var parameters = new DynamicParameters();
        parameters.Add("@Email", email);
        parameters.Add("@PasswordHash", passwordHash);
        parameters.Add("@Salt", salt);

        const string query = @"
                        BEGIN TRANSACTION
                            DECLARE @returnIsUserCreated BIT
                            BEGIN
                                INSERT INTO [User](Email, PasswordHash, Salt, CreatedOn) VALUES(@Email, @PasswordHash, @Salt, GetDate())
	                            SET @returnIsUserCreated = 1
                            END
                            SELECT @returnIsUserCreated;
                            COMMIT TRANSACTION
                            GO";
        
        return DbContext.QuerySingleAsync<bool>(query, parameters, CommandTimeout, CommandType.Text);
    }

    public Task<bool> UserExists(string email)
    {
        const string query = @"
            DECLARE @userExists BIT = 0
            IF EXISTS(
                    SELECT *
                    FROM [User]
                    WHERE Email = @email
                )
                SET @userExists = 1
                SELECT @userExists;
            ";
        return DbContext.QuerySingleAsync<bool>(query, new {@email}, CommandTimeout, CommandType.Text);
    }

    public Task<User> GetUserByEmail(string email)
    {
        const string query = @"SELECT * FROM [User] WHERE Email = @email";
        return DbContext.QueryFirstOrDefaultAsync<User>(query, new { @email }, commandTimeout: CommandTimeout, commandType: CommandType.Text);
    }
  
}