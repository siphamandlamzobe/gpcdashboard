using FluentMigrator;

namespace DbMigrator;

[Migration(202210072005)]
public class DropColumn_ServiceType_202210072005 : Migration
{
    public override void Down()
    {
    }

    public override void Up()
    {
        Execute.Script("DropColumn_ServiceType_202210072005.sql");
    }
}
