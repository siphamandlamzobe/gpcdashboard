using FluentMigrator;

namespace DbMigrator;

[Migration(202209282150)]
public class AddServiceReportTable_202209271441 : Migration
{
    public override void Down()
    {
        Delete.Table("AddServiceReport");
    }

    public override void Up()
    {
        Execute.Script("AddServiceReportTable_202209271441.sql");
    }
}
