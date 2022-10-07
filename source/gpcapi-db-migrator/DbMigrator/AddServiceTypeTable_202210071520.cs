using FluentMigrator;

namespace DbMigrator;

[Migration(202210071520)]
public class AddServiceTypeTable_202210071520 : Migration
{
    public override void Down()
    {
        Delete.Table("LUTServiceType");
    }

    public override void Up()
    {
        Execute.Script("AddServiceTypeTable_202210071520.sql");
    }
}
