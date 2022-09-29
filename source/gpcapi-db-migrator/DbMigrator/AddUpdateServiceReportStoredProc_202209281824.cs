using FluentMigrator;

namespace DbMigrator;

[Migration(202209281824)]
public class AddUpdateServiceReportStoredProc_202209281824 : Migration
{
    public override void Down()
    {
    }

    public override void Up()
    {
        Execute.Script("AddUpdateServiceReport_202209281824.sql");
    }
}
