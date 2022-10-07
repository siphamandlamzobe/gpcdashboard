using FluentMigrator;

namespace DbMigrator;

[Migration(202210071540)]
public class AddServiceReportTable_202209271441 : Migration
{
    public override void Down()
    {
        Delete.Table("ServiceReport");
    }

    public override void Up()
    {
        Execute.Script("AddServiceReportTable_202209271441.sql");
    }
}
