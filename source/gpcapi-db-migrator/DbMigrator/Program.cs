﻿using FluentMigrator.Runner;
using FluentMigrator.Runner.Logging;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Serilog;
using System.Reflection;

namespace DbMigrator;

public class Program
{
    public static void Main(string[] args)
    {
        Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .WriteTo.Console()
                .WriteTo.File("logs/dbMigration.txt", rollingInterval: RollingInterval.Day)
                .CreateLogger();

        var serviceProvider = CreateServices();

        // Put the database update into a scope to ensure
        // that all resources will be disposed.
        using (var scope = serviceProvider.CreateScope())
        {
            UpdateDatabase(scope.ServiceProvider);
        }
    }

    private static IServiceProvider CreateServices()
    {
        return new ServiceCollection()
            .AddFluentMigratorCore()
            .ConfigureRunner(rb => rb
                .AddSqlServer2012()
                .WithGlobalConnectionString(Environment.GetEnvironmentVariable("GPCDashboardConnection"))
                .ScanIn(Assembly.GetExecutingAssembly()).For.Migrations())
            .AddLogging(lb => lb.AddFluentMigratorConsole())
            .AddSingleton<ILoggerProvider, LogFileFluentMigratorLoggerProvider>()
            .Configure<LogFileFluentMigratorLoggerOptions>(
                 opt =>
                 {
                     opt.ShowElapsedTime = true;
                     opt.OutputFileName = "logs/dbMigration.sql";
                     opt.OutputGoBetweenStatements = true;
                     opt.ShowSql = true;
                 })
            .BuildServiceProvider(false);
    }

    private static void UpdateDatabase(IServiceProvider serviceProvider)
    {
        var runner = serviceProvider.GetRequiredService<IMigrationRunner>();
        runner.ListMigrations();
        Log.Information("Migrations running");
        runner.MigrateUp();
    }
}