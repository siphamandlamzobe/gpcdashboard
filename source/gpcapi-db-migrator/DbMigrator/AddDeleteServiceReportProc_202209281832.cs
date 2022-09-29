using FluentMigrator;

namespace DbMigrator;

[Migration(202209281832)]
public class AddDeleteServiceReportProc_202209281832 : Migration
{
    public override void Down()
    {
    }

    public override void Up()
    {
        Execute.Script("AddDeleteServiceReportProc_202209281832.sql");
    }
}
