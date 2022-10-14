using FluentMigrator;

namespace DbMigrator;

[Migration(202210141134)]
public class Add_Proc_GetAllServiceReports : Migration
{
    public override void Down()
    {
    }

    public override void Up()
    {
        Execute.Script("Add_Proc_GetAllServiceReports.sql");
    }
}
