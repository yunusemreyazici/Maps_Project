using FluentMigrator;

namespace Maps_Project.Migrations.DefaultDB;
[DefaultDB, MigrationKey(20180703_1110)]
public class DefaultDB_20180703_1110_RoleKey : AutoReversingMigration
{
    public override void Up()
    {
        Alter.Table("Roles")
            .AddColumn("RoleKey").AsString(100).Nullable();
    }
}