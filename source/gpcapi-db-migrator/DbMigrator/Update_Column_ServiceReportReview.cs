using FluentMigrator;

namespace DbMigrator;

[Migration(202211111539)]
public class Update_Column_ServiceReportReview : Migration
{
    public override void Down()
    {
    }

    public override void Up()
    {
        Execute.Script("Update_Column_ServiceReportReview.sql");
    }
}
