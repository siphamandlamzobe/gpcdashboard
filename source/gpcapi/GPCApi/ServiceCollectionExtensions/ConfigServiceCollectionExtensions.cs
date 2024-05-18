using GPCApi.Repository;
using GPCApi.Repository.DataRepository;
using GPCApi.ServiceCollectionExtensions.Swagger;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Text;
using GPCApi.Repository.Repositories.Users;
using GPCApi.Service.Users;
using GPCApi.Service.Auth;

namespace GPCApi.ServiceCollectionExtensions;

public static class ConfigServiceCollectionExtensions
{
    public static IServiceCollection AddServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddSwaggerGen();

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = config["Jwt:Issuer"],
                ValidAudience = config["Jwt:Audience"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]!))
            };
        });

        return services;
    }

    public static IServiceCollection AddDependencyGroup(
         this IServiceCollection services)
    {
        services.AddTransient<IDbContext, DbContext>();
        services.AddTransient<IServiceReportRepository, ServiceReportRepository>();
        services.AddTransient<IConfigureOptions<SwaggerGenOptions>, ConfigureSwaggerOptions>();
        services.AddTransient<IUserRepository, UserRepository>();
        services.AddTransient<IUserService, UserService>();
        services.AddTransient<IAuthenticationService, AuthenticationService>();

        return services;
    }
}
