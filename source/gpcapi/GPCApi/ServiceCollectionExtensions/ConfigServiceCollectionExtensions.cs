using GPCApi.Options;
using GPCApi.Repository;
using GPCApi.Repository.DataRepository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.OpenApi.Models;

namespace GPCApi.ServiceCollectionExtensions;

public static class ConfigServiceCollectionExtensions
{
    public static IServiceCollection AddConfig(
             this IServiceCollection services, IConfiguration config)
    {
        return services;
    }

    public static IServiceCollection AddServices(this IServiceCollection services, IConfiguration config)
    {
        services.Configure<SwaggerOptions>(
            config.GetSection(SwaggerOptions.SwaggerOption));

        var jwtSettings = new JwtSettings();
        config.Bind(nameof(jwtSettings), jwtSettings);

        services.AddAuthentication(x =>
        {
            x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            x.DefaultForbidScheme = JwtBearerDefaults.AuthenticationScheme;
            x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        });
        //.AddJwtBearer(x =>
        //{
        //    x.SaveToken = true;
        //    x.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
        //    {
        //        ValidateIssuerSigningKey = true,
        //        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtSettings.Secret)),
        //        ValidateIssuer = false,
        //        ValidateAudience = false,
        //        RequireExpirationTime = false,
        //        ValidateLifetime = true
        //    };
        //});


        services.AddSwaggerGen(o =>
        {
            o.SwaggerDoc("v1", new() { Title = "GPC Api", Version = "v1" });

            o.AddSecurityDefinition("Bearer", new()
            {
                Description = "JWT Authorization header using the bearer scheme",
                Name = "Authorization",
                In = Microsoft.OpenApi.Models.ParameterLocation.Header,
                Type = Microsoft.OpenApi.Models.SecuritySchemeType.ApiKey
            });

            o.AddSecurityRequirement(new()
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new()
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        }
                    },
                    new string[]{}
                }
            });
        });

        return services;
    }

    public static IServiceCollection AddDependencyGroup(
         this IServiceCollection services)
    {
        services.AddTransient<IDbContext, DbContext>();
        services.AddTransient<IServiceReportRepository, ServiceReportRepository>();

        return services;
    }
}
