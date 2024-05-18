using GPCApi.Options;
using GPCApi.ServiceCollectionExtensions;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var swaggerOptions = new SwaggerOptions();

var builder = WebApplication.CreateBuilder(args);
var config = builder.Configuration;

builder.Configuration.GetSection(SwaggerOptions.SwaggerOption).Bind(swaggerOptions);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
    policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddAuthentication();

builder.Services.AddControllers();

builder.Services.AddDependencyGroup();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddServices(builder.Configuration);

var app = builder.Build();

app.UseSwagger(option => { option.RouteTemplate = swaggerOptions.JsonRoute; });
app.UseSwaggerUI(option =>
{
    option.SwaggerEndpoint(swaggerOptions.UIEndpoint, swaggerOptions.Description);
});

// app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();