using FluentMigrator;

namespace DbMigrator;

[Migration(202211111536)]
public class Add_Proc_AddServiceReport : Migration
{
    public override void Down()
    {
    }

    public override void Up()
    {
        Execute.Script("Add_Proc_AddServiceReport.sql");
    }
}
