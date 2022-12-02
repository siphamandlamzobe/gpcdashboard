using GPCApi.Options;
using GPCApi.ServiceCollectionExtensions;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
    policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddControllers();

builder.Services.AddDependencyGroup();

builder.Services.AddEndpointsApiExplorer();

var swaggerOptions = new SwaggerOptions();

builder.Configuration.GetSection(SwaggerOptions.SwaggerOption).Bind(swaggerOptions);

builder.Services.AddServices(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger(option => { option.RouteTemplate = swaggerOptions.JsonRoute; });
    app.UseSwaggerUI(option =>
    {
        option.SwaggerEndpoint(swaggerOptions.UIEndpoint, swaggerOptions.Description);
    });
}

// app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();