using FluentMigrator;

namespace DbMigrator;

[Migration(202210141150)]
public class Add_Proc_GetServiceReportById : Migration
{
    public override void Down()
    {
    }

    public override void Up()
    {
        Execute.Script("Add_Proc_GetServiceReportById.sql");
    }
}
