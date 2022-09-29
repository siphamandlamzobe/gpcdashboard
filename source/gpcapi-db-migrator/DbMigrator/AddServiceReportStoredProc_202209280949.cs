using FluentMigrator;

namespace DbMigrator;

[Migration(202209282155)]
public class AddServiceReportStoredProc_202209280949 : Migration
{
    public override void Down()
    {
    }

    public override void Up()
    {
        Execute.Script("AddServiceReportStoredProc_202209280949.sql");
    }
}
