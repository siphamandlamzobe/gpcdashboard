using FluentMigrator;

namespace DbMigrator;

[Migration(202210142225)]
public class Add_Proc_UpdateServiceReport : Migration
{
    public override void Down()
    {
    }

    public override void Up()
    {
        Execute.Script("Add_Proc_UpdateServiceReport.sql");
    }
}
