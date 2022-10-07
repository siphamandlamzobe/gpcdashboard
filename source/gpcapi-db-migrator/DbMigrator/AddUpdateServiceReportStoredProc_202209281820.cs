using FluentMigrator;

namespace DbMigrator;

[Migration(202209281820)]
public class AddUpdateServiceReportStoredProc_202209281820 : Migration
{
    public override void Down()
    {
    }

    public override void Up()
    {
        Execute.Script("AddUpdateServiceReportStoredProc_202209281820.sql");
    }
}
