using FluentMigrator;

namespace DbMigrator;

[Migration(202209281829)]
public class AddGetServiceReportByIdProc_202209281829 : Migration
{
    public override void Down()
    {
    }

    public override void Up()
    {
        Execute.Script("AddGetServiceReportByIdProc_202209281829.sql");
    }
}
