using FluentMigrator;

namespace DbMigrator;

[Migration(202210072021)]
public class AddColumn_ServiceTypeId_202210072021 : Migration
{
    public override void Down()
    {
    }

    public override void Up()
    {
        Execute.Script("AddColumn_ServiceTypeId_202210072021.sql");
    }
}
